const express = require('express');
const cors = require('cors');
const dbConnection = require('./src/database/config');
require('dotenv').config();

// Raise the server
const app = express();

// DB connection
dbConnection();

//CORS
app.use(cors());

// To parse the body
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/prts', require('./src/routes/propertiesRoutes'));

// Listening queries
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server up on ${process.env.PORT} port`);
});
