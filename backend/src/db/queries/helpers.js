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
      SELECT cart.product_id, cart.quantity, products.name, products.price
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.session_id = $1
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
    console.log('Saving to DB, sessionId:', sessionId, 'cart:', cart); // Log data being saved

    // Loop through the cart items and save them to the database
    for (const item of cart) {
      await pool.query(
        `
        INSERT INTO cart (session_id, product_id, quantity)
        VALUES ($1, $2, $3)
        ON CONFLICT (session_id, product_id)
        DO UPDATE SET quantity = EXCLUDED.quantity
        `,
        [sessionId, item.product_id, item.quantity]
      );
    }
    console.log('Cart saved successfully');
  } catch (err) {
    console.error('Error saving cart to database:', err);
    throw err;
  }
};




module.exports = { getAllFruits, addUserIfNotExists, getAllFruitsAscending, getAllFruitsDescending, getCartFromDB, saveCartToDB };