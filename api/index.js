const express = require('express');
const dbConnection = require('./src/database/config');
require('dotenv').config();

// raise the server
const app = express();

// DB connection
dbConnection();
// To parse the body
app.use(express.json());

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));

// Listening queries
app.listen(process.env.PORT, () => {
  console.log(`Server up on ${process.env.PORT} port`);
});
