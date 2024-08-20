const express = require('express');
const bcrypt = require('bcryptjs');
const sql = require('mssql');
const router = express.Router();

// Database configuration
const config = {
    user: 'sa',
    password: 'newpassword',
    server: 'DESKTOP-5SU07NB',
    database: 'Survivor',
    options: {
        encrypt: true, // For Azure or SQL Server 2017+
        trustServerCertificate: true, // For local development
    }
};

// Connect to the database
sql.connect(config).catch(err => console.error('Database connection error:', err));

router.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).send('Please fill in all fields.');
        }

        const userCheck = await sql.query`SELECT * FROM users WHERE email = ${email} OR username = ${username}`;
        if (userCheck.recordset.length > 0) {
            return res.status(400).send('User with this email or username already exists.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await sql.query`INSERT INTO users (username, email, password_hash) VALUES (${username}, ${email}, ${hashedPassword})`;

        if (result.rowsAffected.length > 0) {
            res.status(201).send('User registered successfully.');
        } else {
            res.status(500).send('Failed to register the user.');
        }
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Server error.');
    }
});

module.exports = router;
