// userData.js
const userPicks = {};

function getUserPicks(userId) {
    return userPicks[userId] || [];
}

function addPick(userId, week, team) {
    if (!userPicks[userId]) {
        userPicks[userId] = [];
    }
    userPicks[userId][week] = team;
}

function hasPickedTeam(userId, team) {
    return Object.values(userPicks[userId] || {}).includes(team);
}

module.exports = {
    getUserPicks,
    addPick,
    hasPickedTeam
};
