var HttpUtil = require('../utils/http_util.js');

function getNotifications(req, res) {
  HttpUtil.passThrough(req, res, 'notifications', null, {});
}

function getHome(req, res) {
  HttpUtil.passThrough(req, res, 'home', null, {});
}

exports.getNotifications = getNotifications;
exports.getHome = getHome;
