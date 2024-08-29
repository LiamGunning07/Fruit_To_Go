const express = require('express');
const router = express.Router();
const { getAllFruits, getAllFruitsAscending, getAllFruitsDescending } = require('../db/queries/helpers')


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

router.get('/price/asc', async (req, res) => {
  try {
    const fruits = await getAllFruitsAscending();
    res.json(fruits);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/price/desc', async (req, res) => {
  try {
    const fruits = await getAllFruitsDescending();
    res.json(fruits);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


module.exports = router;
