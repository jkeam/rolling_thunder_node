var HttpUtil = require('../utils/http_util.js');

function getLeaderboard(req, res) {
  HttpUtil.passThrough(req, res, 'leaderboard', null, {});
}

function getLeaderboardThisMonth(req, res) {
  HttpUtil.passThrough(req, res, 'leaderboard_this_month', null, {});
}

function getLeaderboardThisYear(req, res) {
  HttpUtil.passThrough(req, res, 'leaderboard_this_year', null, {});
}

function getLeaderboardAllTime(req, res) {
  HttpUtil.passThrough(req, res, 'leaderboard_all_time', null, {});
}

exports.getLeaderboard = getLeaderboard;
exports.getLeaderboardThisMonth = getLeaderboardThisMonth;
exports.getLeaderboardThisYear = getLeaderboardThisYear;
exports.getLeaderboardAllTime = getLeaderboardAllTime;
