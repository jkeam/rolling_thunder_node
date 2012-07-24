var async = require('async');
var http = require('http');

function getApiUrlOptions(url) {
  return {
    host: 'www.cloudspokes.com',
    port: 80,
    path: '/',
    method: 'GET'
  };
}

function processQueryParams(queryObj) {
  var query = null;

  //right now its just a pass through so re-assemble the query params
  async.forEach(Object.keys(queryObj), function(item, callback) {
    if (query != null) {
      query = query + "&";
    }
    else {
      query = "?";
    }

    query = query + item + "=" + queryObj[item];
    callback();
  }, function(err) {
    if (err != null) {
      console.error("Error encountered while examining query parameters: " + query);
    }
  });

  if (query == null)
    query = "";
  return query;
}

function pipeHttpCall(options, response) {
  var responseString = "";
  var req = http.request(options, function(res) {
    res.on('data', function(chunk) {
      responseString = responseString + chunk.toString();
    });

    res.on('end', function() {
      response.send(responseString);
    });
  });

  req.on('error', function(err) {
    console.error(err.message);
  });

  req.end();
}

exports.getApiUrlOptions = getApiUrlOptions;
exports.processQueryParams = processQueryParams;
exports.pipeHttpCall = pipeHttpCall;
