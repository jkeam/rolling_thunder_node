var HttpUtil = require('../utils/http_util.js');

function getNotification(req, res) {
  HttpUtil.passThrough(req, res, 'notifications', null, {});
}

function getHome(req, res) {
  HttpUtil.passThrough(req, res, 'home', null, {});
}

exports.getNotification = getNotification;
exports.getHome = getHome;
