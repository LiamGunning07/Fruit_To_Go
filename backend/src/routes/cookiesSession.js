const express = require('express');
const router = express.Router();
const { getCartFromDB, saveCartToDB } = require('../db/queries/helpers');

// Load cart for the given sessionId
router.get('/load-cart', (req, res) => {
  const sessionId = req.cookies.sessionId; // Get sessionId from cookies

  if (!sessionId) {
    return res.json({ cart: [] }); // No session ID, return an empty cart
  }

  // Retrieve the cart from the database
  getCartFromDB(sessionId)
    .then(cart => res.json({ cart }))
    .catch(err => {
      console.error('Error loading cart:', err);
      res.status(500).json({ error: 'Failed to load cart' });
    });
});

// Sync cart with the database
router.post('/sync-cart', (req, res) => {
  console.log('Cookies:', req.cookies);  // Log cookies to check if sessionId is present
  console.log('Cart:', req.body.cart);   // Log the cart to see what is being sent

  const { cart } = req.body;
  const sessionId = req.cookies.sessionId; // Retrieve sessionId from the cookie

  if (!sessionId) {
    return res.status(400).json({ message: 'No session ID found' });
  }

  if (!cart || !Array.isArray(cart)) {
    return res.status(400).json({ message: 'Invalid cart data' });
  }

  // Save or update the cart in the database
  saveCartToDB(sessionId, cart)
    .then(() => res.json({ message: 'Cart synced successfully!' }))
    .catch(err => {
      console.error('Error syncing cart:', err);
      res.status(500).json({ error: 'Failed to sync cart' });
    });
});


module.exports = router;
