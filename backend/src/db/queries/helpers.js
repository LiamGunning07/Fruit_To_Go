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


module.exports = { getAllFruits, addUserIfNotExists };