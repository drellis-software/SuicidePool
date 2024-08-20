const express = require('express');
const bcrypt = require('bcryptjs');
const sql = require('mssql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Importing route modules
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');
const registerRoutes = require('./routes/register');

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware to serve static files
app.use(express.static('public'));

// Use the routes with the app
app.use('/', indexRoutes);
app.use('/api', apiRoutes);
app.use('/register', registerRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
