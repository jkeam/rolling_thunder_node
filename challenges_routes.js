var Common = require("./common.js");

function getRecentChallenges(req, res) {
  Common.passThrough(req, res, 'challenges', 'recent', {});
}

function getChallenges(req, res) {
  var id = req.params.id;
  if (id) {
    if (!validate(id, req, res)) {
      return;
    }
  }

  Common.passThrough(req, res, 'challenges', null, {id:id});
}

function getRegistrants(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }

  Common.passThrough(req, res, 'challenges', 'registrants', {id:id});
}

function getResults(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }

  Common.passThrough(req, res, 'challenges', 'results', {id:id});
}

function validate(id, req, res) {
  var success = Common.validateId(id);
  if (!success) {
    Common.returnError('Invalid id', req, res);
  }
  return success;
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
exports.getRegistrants = getRegistrants;
exports.getResults = getResults;
