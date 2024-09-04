const express = require('express');
const db = require('./db/index'); // Adjust the path to the db.js file if necessary
const fruitsRouter = require('./routes/fruit')
const usersRouter = require('./routes/users')
const searchRouter = require('./routes/search')
const sessionRouter = require('./routes/cookiesSession')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());

// Start the server
app.use('/api/fruits', fruitsRouter)
app.use('/api/users', usersRouter);
app.use('/api/search', searchRouter);
app.use('/api/session', sessionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
