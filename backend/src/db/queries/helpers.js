const pool = require('../index');

const getAllFruits = async () => {
  try {
    const res = await pool.query('SELECT * FROM products');
    console.log("res.rows", res.rows);
    return res.rows;
  } catch (err) {
    console.error('Error fetching fruits:', err);
    throw err;
  }
};

async function addUserIfNotExists(email, password) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const checkQuery = 'SELECT COUNT(*) FROM users WHERE email = $1';
    const checkResult = await client.query(checkQuery, [email]);
    const userExists = parseInt(checkResult.rows[0].count, 10);

    if (userExists === 0) {
      const insertQuery = `
        INSERT INTO users (email, password)
        VALUES ($1, $2)
        RETURNING email;
      `;
      const insertResult = await client.query(insertQuery, [email, password]);

      await client.query('COMMIT');
      return insertResult.rows[0];
    } else {
      await client.query('ROLLBACK');
      return null;
    }
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

const getAllFruitsAscending = async () => {
  try {
    const res = await pool.query('SELECT * FROM products ORDER BY price ASC');
    console.log("res.rows", res.rows);
    return res.rows;
  } catch (err) {
    console.error('Error fetching fruits:', err);
    throw err;
  }
};

const getAllFruitsDescending = async () => {
  try {
    const res = await pool.query('SELECT * FROM products ORDER BY price DESC');
    console.log("res.rows", res.rows);
    return res.rows;
  } catch (err) {
    console.error('Error fetching fruits:', err);
    throw err;
  }
};

const getCartFromDB = async (sessionId) => {
  try {
    const query = `
      SELECT 
        ci.product_id, 
        ci.quantity, 
        p.name, 
        p.price
      FROM cart c
      JOIN cart_items ci ON c.id = ci.cart_id
      JOIN products p ON ci.product_id = p.id
      WHERE c.session_id = $1
    `;
    const result = await pool.query(query, [sessionId]);
    return result.rows; // Returns the cart items with product details
  } catch (err) {
    console.error('Error fetching cart from database:', err);
    throw err;
  }
};



const saveCartToDB = async (sessionId, cart) => {
  try {
    console.log('Saving to DB, sessionId:', sessionId, 'cart:', cart);

    // Step 1: Get or Create Cart
    let cartId;
    const cartResult = await pool.query(
      `
      INSERT INTO cart (session_id)
      VALUES ($1)
      ON CONFLICT (session_id) DO NOTHING
      RETURNING id
      `,
      [sessionId]
    );

    if (cartResult.rows.length > 0) {
      // Cart was just created
      cartId = cartResult.rows[0].id;
    } else {
      // Cart already exists, retrieve its id
      const existingCart = await pool.query(
        'SELECT id FROM cart WHERE session_id = $1',
        [sessionId]
      );
      cartId = existingCart.rows[0].id;
    }

    // Step 2: Retrieve Existing Cart Items
    const existingCartItems = await pool.query(
      'SELECT product_id FROM cart_items WHERE cart_id = $1',
      [cartId]
    );
    const existingProductIds = existingCartItems.rows.map(row => row.product_id);

    // Step 3: Insert or Update Cart Items
    for (const item of cart) {
      await pool.query(
        `
        INSERT INTO cart_items (cart_id, product_id, quantity)
        VALUES ($1, $2, $3)
        ON CONFLICT (cart_id, product_id)
        DO UPDATE SET quantity = EXCLUDED.quantity
        `,
        [cartId, item.product_id, item.quantity]
      );
    }

    // Step 4: Delete Removed Items
    const updatedProductIds = cart.map(item => item.product_id);
    const productsToDelete = existingProductIds.filter(
      productId => !updatedProductIds.includes(productId)
    );

    if (productsToDelete.length > 0) {
      await pool.query(
        'DELETE FROM cart_items WHERE cart_id = $1 AND product_id = ANY($2::int[])',
        [cartId, productsToDelete]
      );
      console.log('Deleted items:', productsToDelete);
    }

    console.log('Cart saved successfully');
  } catch (err) {
    console.error('Error saving cart to database:', err);
    throw err;
  }
};

const checkout = async (sessionId) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Step 1: Retrieve Cart and Cart Items
    const cartResult = await client.query(
      'SELECT id FROM carts WHERE session_id = $1',
      [sessionId]
    );
    if (cartResult.rows.length === 0) {
      throw new Error('Cart not found for this session.');
    }
    const cartId = cartResult.rows[0].id;

    const cartItemsResult = await client.query(
      `
      SELECT ci.product_id, ci.quantity, p.price, p.stock
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.cart_id = $1
      `,
      [cartId]
    );
    const cartItems = cartItemsResult.rows;

    if (cartItems.length === 0) {
      throw new Error('Cart is empty.');
    }

    // Step 2: Calculate Total Amount and Check Stock Availability
    let totalAmount = 0.0;
    for (const item of cartItems) {
      if (item.quantity > item.stock) {
        throw new Error(`Insufficient stock for product ID ${item.product_id}`);
      }
      totalAmount += item.quantity * item.price;
    }

    // Step 3: Create Order
    const orderResult = await client.query(
      `
      INSERT INTO orders (cart_id, session_id, total_amount, status)
      VALUES ($1, $2, $3, 'Pending')
      RETURNING id
      `,
      [cartId, sessionId, totalAmount]
    );
    const orderId = orderResult.rows[0].id;

    // Step 4: Insert Order Items
    for (const item of cartItems) {
      await client.query(
        `
        INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
        VALUES ($1, $2, $3, $4)
        `,
        [orderId, item.product_id, item.quantity, item.price]
      );
    }

    // Step 5: Update Product Stock
    for (const item of cartItems) {
      await client.query(
        `
        UPDATE products
        SET stock = stock - $1
        WHERE id = $2
        `,
        [item.quantity, item.product_id]
      );
    }

    // Step 6: Clear Cart Items
    await client.query(
      'DELETE FROM cart_items WHERE cart_id = $1',
      [cartId]
    );

    // Optionally, delete the cart itself
    // await client.query('DELETE FROM carts WHERE id = $1', [cartId]);

    await client.query('COMMIT');

    console.log('Checkout successful. Order ID:', orderId);
    return { orderId, totalAmount };
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Error during checkout:', err.message);
    throw err;
  } finally {
    client.release();
  }
};





module.exports = { getAllFruits, addUserIfNotExists, getAllFruitsAscending, getAllFruitsDescending, getCartFromDB, saveCartToDB, checkout };