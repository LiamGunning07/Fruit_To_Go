const express = require('express');
const router = express.Router();

router.post('/save-cart', (req, res) => {
  const sessionId = req.cookies.sessionId;

  if (!sessionId) {
    return res.json({ cart: [] }); // No session ID, return an empty cart
  }

  getCartFromDB(sessionId)
    .then(cart => res.json({ cart }))
    .catch(err => res.status(500).json({ error: 'Failed to load cart' }));
});

router.post('/sync-cart', (req, res) => {
  const { cart } = req.body;
  const sessionId = req.cookies.sessionId; // Retrieve sessionId from the cookie

  if (!sessionId) {
    return res.status(400).json({ message: 'No session ID found' });
  }

  // Store cart in database or in-memory store (e.g., Redis)
  saveCartToDB(sessionId, cart)
    .then(() => res.json({ message: 'Cart synced successfully!' }))
    .catch(err => res.status(500).json({ error: 'Failed to sync cart' }));
});

module.exports = router;