var Common = require('./common.js');

function getLeaderboard(req, res) {
  Common.passThrough(req, res, 'leaderboard', null, {});
}

function getLeaderboardThisMonth(req, res) {
  Common.passThrough(req, res, 'leaderboard_this_month', null, {});
}

function getLeaderboardThisYear(req, res) {
  Common.passThrough(req, res, 'leaderboard_this_year', null, {});
}

function getLeaderboardAllTime(req, res) {
  Common.passThrough(req, res, 'leaderboard_all_time', null, {});
}

exports.getLeaderboard = getLeaderboard;
exports.getLeaderboardThisMonth = getLeaderboardThisMonth;
exports.getLeaderboardThisYear = getLeaderboardThisYear;
exports.getLeaderboardAllTime = getLeaderboardAllTime;
