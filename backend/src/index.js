const express = require('express');
const db = require('./db/index'); // Adjust the path to the db.js file if necessary

const app = express();

app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
