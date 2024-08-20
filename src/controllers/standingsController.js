// controllers/standingsController.js
const path = require('path');

exports.getStandingsPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/standings.html'));
};
// Server=localhost;Database=master;Trusted_Connection=True;