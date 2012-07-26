var HttpUtil = require('../utils/http_util.js');
var Validator = require('../utils/validator.js');

function getRecentChallenges(req, res) {
  HttpUtil.passThrough(req, res, 'challenges', 'recent', {});
}

function getChallenges(req, res) {
  var id = req.params.id;
  if (id) {
    if (!validate(id, req, res)) {
      return;
    }
  }

  HttpUtil.passThrough(req, res, 'challenges', null, {id:id});
}

function getRegistrants(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }

  HttpUtil.passThrough(req, res, 'challenges', 'registrants', {id:id});
}

function getResults(req, res) {
  var id = req.params.id;
  if (!validate(id, req, res)) {
    return;
  }

  HttpUtil.passThrough(req, res, 'challenges', 'results', {id:id});
}

function validate(id, req, res) {
  var success = Validator.validateNumericId(id);
  if (!success) {
    HttpUtil.returnError('Invalid id', req, res);
  }
  return success;
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
exports.getRegistrants = getRegistrants;
exports.getResults = getResults;
