const getAllFruits = async () => {
  try {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
  } catch (err) {
    console.error('Error fetching fruits:', err);
    throw err;
  }
};

module.exports = { getAllFruits };