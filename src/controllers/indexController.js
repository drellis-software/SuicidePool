const path = require('path');

exports.getIndexPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
};
