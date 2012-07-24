var Common = require("./common.js");

function getIndex(req, res) {
  Common.passThrough(req, res, 'members', null, {});
}

function getOrderByActive(req, res) {
  Common.passThrough(req, res, 'members', 'order_by_active', {});
}

function getOrderByName(req, res) {
  Common.passThrough(req, res, 'members', 'order_by_name', {});
}

function getOrderByWin(req, res) {
  Common.passThrough(req, res, 'members', 'order_by_win', {});
}

function getPastChallenges(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }
  Common.passThrough(req, res, 'members', 'past_challenges', {id:id});
}

function getActiveChallenges(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }
  Common.passThrough(req, res, 'members', 'active_challenges', {id:id});
}

function getSearch(req, res) {
  Common.passThrough(req, res, 'members', 'search', {});
}

function validate(id, req, res) {
  var success = Common.validateStringId(id);
  if (!success) {
    Common.returnError('Invalid id', req, res);
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
