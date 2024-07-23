const express = require('express');
const router = express.Router();
const { getAllFruits } = require('../db/queries/helpers')


router.get('/', async (req, res) => {
  try {
    const fruits = await getAllFruits();
    console.log(fruits);
    res.json(fruits);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
