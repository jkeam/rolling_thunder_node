var Common = require("./common.js");

function getRecentChallenges(req, res) {
  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = Common.prepareResponseToMatchFormat(req, res);
  apiUrlOptions.path = "/challenges/recent" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getChallenges(req, res) {
  var id = req.params.id;
  var apiUrl = "/challenges";

  if (id) {
    if (!Common.validId(id)) {
      Common.returnError('Invalid id', req.params.format, res);
      return;
    }
    apiUrl = apiUrl + "/" + id;
  }

  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = Common.prepareResponseToMatchFormat(req, res);
  apiUrlOptions.path = apiUrl + extension + queryparams;
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getRegistrants(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = Common.prepareResponseToMatchFormat(req, res);
  apiUrlOptions.path = "/challenges/" + id + "/registrants" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getResults(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = Common.prepareResponseToMatchFormat(req, res);
  apiUrlOptions.path = "/challenges/" + id + "/results" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
exports.getRegistrants = getRegistrants;
exports.getResults = getResults;
