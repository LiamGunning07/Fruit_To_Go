const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/', async (req, res) => {
  const query = req.query.q;  // Get the search query from the request
  console.log(query, "query")

  if (!query) {
    return res.json([]);  // Return an empty array if no query
  }

  try {
    const sqlQuery = `
      SELECT *
      FROM products
      WHERE LOWER(name) LIKE $1
    `;
    const values = [`%${query.toLowerCase()}%`];  // Search term with wildcards

    const result = await pool.query(sqlQuery, values);

    res.json(result.rows);  // Send back the search results as JSON
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server error');
  }
});

module.exports = router;