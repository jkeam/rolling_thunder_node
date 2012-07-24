var Common = require("./common.js");

function getRecentChallenges(req, res) {
  Common.passThrough(req, res, 'challenges', 'recent', {});
}

function getChallenges(req, res) {
  var id = req.params.id;
  if (id) {
    if (!Common.validId(id)) {
      Common.returnError('Invalid id', req.params.format, res);
      return;
    }
  }

  Common.passThrough(req, res, 'challenges', null, {id:id});
}

function getRegistrants(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  Common.passThrough(req, res, 'challenges', 'registrants', {id:id});
}

function getResults(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  Common.passThrough(req, res, 'challenges', 'results', {id:id});
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
exports.getRegistrants = getRegistrants;
exports.getResults = getResults;
