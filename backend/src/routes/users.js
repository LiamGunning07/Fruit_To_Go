const express = require('express');
const router = express.Router();
const { addUserIfNotExists } = require('../db/queries/helpers')


router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await addUserIfNotExists(email, password);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(409).json({ error: 'User already exists' });
    }
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;