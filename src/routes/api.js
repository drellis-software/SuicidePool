const express = require('express');
const router = express.Router();
const { teams } = require('../data/teams');

const userPicks = {};

// Endpoint to get teams
router.get('/teams', (req, res) => {
    res.json(teams);
});

// Endpoint to post a pick
router.post('/pick', (req, res) => {
    const { userId, week, team } = req.body;

    if (!teams.includes(team)) {
        return res.status(400).send('Invalid team.');
    }
    if (!userPicks[userId]) {
        userPicks[userId] = {};
    }
    if (Object.values(userPicks[userId]).includes(team)) {
        return res.status(400).send('Team already picked.');
    }
    if (userPicks[userId][week]) {
        return res.status(400).send('Team already picked for this week.');
    }

    userPicks[userId][week] = team;
    res.send('Pick successful!');
});

module.exports = router;
