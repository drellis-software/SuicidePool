// pickHandler.js
const teams = require('../data/teams');
const { getUserPicks, addPick, hasPickedTeam } = require('./userData');

function pickTeam(userId, week, team) {
    if (!teams.includes(team)) {
        return 'Invalid team.';
    }
    if (hasPickedTeam(userId, team)) {
        return 'Team already picked.';
    }
    if (getUserPicks(userId)[week]) {
        return 'Team already picked for this week.';
    }
    addPick(userId, week, team);
    return 'Pick successful!';
}

module.exports = pickTeam;
