const express = require('express');
const db = require('./db/index'); // Adjust the path to the db.js file if necessary
const fruitsRouter = require('./routes/fruit')
const usersRouter = require('./routes/users')
const searchRouter = require('./routes/search')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Start the server
app.use('/api/fruits', fruitsRouter)
app.use('/api/users', usersRouter);
app.use('/api/search', searchRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
