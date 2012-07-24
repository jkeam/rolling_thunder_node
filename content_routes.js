var Common = require("./common.js");

function getNotification(req, res) {
  Common.passThrough(req, res, 'notifications', null, {});
}

function getHome(req, res) {
  Common.passThrough(req, res, 'home', null, {});
}

exports.getNotification = getNotification;
exports.getHome = getHome;
