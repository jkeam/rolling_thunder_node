var Common = require("./common.js");

function getRecentChallenges(req, res) {
  res.statusCode = 200;
  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = '';
  switch(req.params.format) {
    case 'json':
      extension = '.json';
      res.contentType('application/json');
    break;
    default:
      extension = '';
      res.contentType('text/html');
  }

  apiUrlOptions.path = "/challenges/recent" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getChallenges(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  res.statusCode = 200;
  var apiUrlOptions = Common.getApiUrlOptions();
  var apiUrl = "/challenges";
  var queryparams = Common.processQueryParams(req.query);

  if (req.params.id) {
    apiUrl = apiUrl + "/" + id;
  }

  var extension = '';
  switch(req.params.format) {
    case 'json':
      extension = '.json';
      res.contentType('application/json');

    break;
    default:
      extension = '';
      res.contentType('text/html');
  }

  apiUrlOptions.path = apiUrl + extension + queryparams;
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getRegistrants(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  res.statusCode = 200;
  var id = req.params.id;
  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = '';
  switch(req.params.format) {
    case 'json':
      extension = '.json';
      res.contentType('application/json');
    break;
    default:
      extension = '';
      res.contentType('text/html');
  }

  apiUrlOptions.path = "/challenges/" + id + "/registrants" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

function getResults(req, res) {
  var id = req.params.id;
  if (!Common.validId(id)) {
    Common.returnError('Invalid id', req.params.format, res);
    return;
  }

  res.statusCode = 200;
  var apiUrlOptions = Common.getApiUrlOptions();
  var queryparams = Common.processQueryParams(req.query);

  var extension = '';
  switch(req.params.format) {
    case 'json':
      extension = '.json';
      res.contentType('application/json');
    break;
    default:
      extension = '';
      res.contentType('text/html');
  }

  if (!req.params.id) {
    Common.returnError('Missing id', req.params.format, res);
  }

  apiUrlOptions.path = "/challenges/" + id + "/results" + extension + queryparams; 
  Common.pipeHttpCall(apiUrlOptions, res);
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
exports.getRegistrants = getRegistrants;
exports.getResults = getResults;
