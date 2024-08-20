// controllers/poolController.js
const path = require('path');

exports.getPoolPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pool.html'));
};
