const express = require('express');
const db = require('./db/index'); // Adjust the path to the db.js file if necessary
const fruitsRouter = require('./routes/fruit')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use(cors());

// Start the server
app.use('/api/fruits', fruitsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
