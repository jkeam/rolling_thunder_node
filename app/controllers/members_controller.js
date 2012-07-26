var HttpUtil = require('../utils/http_util.js');
var Validator = require('../utils/validator.js');

function getIndex(req, res) {
  HttpUtil.passThrough(req, res, 'members', null, {});
}

function getOrderByActive(req, res) {
  HttpUtil.passThrough(req, res, 'members', 'order_by_active', {});
}

function getOrderByName(req, res) {
  HttpUtil.passThrough(req, res, 'members', 'order_by_name', {});
}

function getOrderByWin(req, res) {
  HttpUtil.passThrough(req, res, 'members', 'order_by_win', {});
}

function getPastChallenges(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }
  HttpUtil.passThrough(req, res, 'members', 'past_challenges', {id:id});
}

function getActiveChallenges(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }
  HttpUtil.passThrough(req, res, 'members', 'active_challenges', {id:id});
}

function getSearch(req, res) {
  HttpUtil.passThrough(req, res, 'members', 'search', {});
}

function validate(id, req, res) {
  var success = Validator.validateStringId(id);
  if (!success) {
    HttpUtil.returnError('Invalid id', req, res);
  }
  return success;
}

exports.getIndex = getIndex;
exports.getOrderByActive = getOrderByActive;
exports.getOrderByName = getOrderByName;
exports.getOrderByWin = getOrderByWin;
exports.getPastChallenges = getPastChallenges;
exports.getActiveChallenges = getActiveChallenges;
exports.getSearch = getSearch;
