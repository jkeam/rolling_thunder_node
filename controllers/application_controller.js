var HttpUtil = require('../utils/http_util.js');

function getIndex(req, res) {
    HttpUtil.passThrough(req, res, null, null, {});
}

function error(req, res) {
  switch (req.params.format) {
    case 'json':
      res.contentType('application/json');
      res.json('Error', 500);
    break;
    default:
      res.contentType('text/html');
      res.statusCode = 500;
      res.render('error', {message: 'Error'});
  }
}

exports.getIndex = getIndex;
exports.error = error;
