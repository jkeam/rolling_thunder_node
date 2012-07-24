var Common = require("./common.js");

function getRecentChallenges(req, res) {
  var apiUrlOptions = Common.getApiUrlOptions();
  switch(req.params.format) {
    case 'json':
      apiUrlOptions.path = "/challenges/recent.json"; 
      res.json({url:apiUrlOptions});
    break;
    default:
      res.send("hi");
  }
}

function getChallenges(req, res) {
  res.contentType('application/json');
  res.statusCode = 200;

  var id = req.params.id;
  var registrants = req.params.registrants;
  var results = req.params.results;
  var apiUrlOptions = Common.getApiUrlOptions();
  var apiUrl = "/challenges";
  var query = req.query;
  var queryparams = Common.processQueryParams(query);
  switch(req.params.format) {
    case 'json':
      if (id === undefined) {
          apiUrl = apiUrl + ".json"; 
      }
      else {
        apiUrl = apiUrl + "/" + id;
        if (registrants !== undefined) {
          apiUrl = apiUrl + "registrants.json";
        }
        else if (registrants !== undefined) {
          apiUrl = apiUrl + "results.json";
        }
        else {
          apiUrl = apiUrl + ".json";
        }
      }

      apiUrlOptions.path = apiUrl + queryparams;
      Common.pipeHttpCall(apiUrlOptions, res);
    break;
    default:
      res.send("hi");
  }
}

exports.getChallenges = getChallenges;
exports.getRecentChallenges = getRecentChallenges;
