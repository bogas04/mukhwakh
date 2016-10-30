'use strict';

var URLs = {
  github: 'https://github.com/bogas04/mukhwakh',
  source: 'http://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.pdf',
  api: '/api'
};
var head = function head(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Mukhwakh' : _ref$title;
  return '\n<head>\n  <title>' + title + '</title>\n  <link rel="stylesheet" href="/node_modules/bootswatch/simplex/bootstrap.min.css" />\n  <link rel="stylesheet" href="/css/style.css" />\n  <link rel="icon" type="image/png" href="/favicon.ico" />\n  <meta charset="utf-8" />\n</head>\n';
};

var footer = function footer() {
  return '\n  <hr />\n  <div class="container-fluid footer">\n    <ul class="nav nav-pills">\n      <li><a target="_blank" href="' + URLs.github + '">&copy; ' + new Date().getFullYear() + ' Mukhwak</a></li>\n      <li><a target="_blank" href="' + URLs.api + '">Developer</a></li>\n      <li><a target="_blank" href="' + URLs.github + '/issues/new">Report Issue</a></li>\n      <li><a target="_blank" href="' + URLs.source + '">Hukamnama Source</a></li>\n    </ul>\n  </div>\n';
};

module.exports = function (_ref2) {
  var data = _ref2.data,
      _ref2$error = _ref2.error,
      error = _ref2$error === undefined ? false : _ref2$error,
      _ref2$err = _ref2.err,
      err = _ref2$err === undefined ? {} : _ref2$err;
  return error ? '\n<!doctype>\n<html>\n  ' + head({ title: 'Mukhwak - Error!' }) + '\n  <body>\n    <div class="container">\n      <h1>Oops, we\'ve some bad news!</h1>\n      <div class="jumbotron">' + (err === 404 ? 'Page not found!' : JSON.stringify(err, null, 2)) + '</div>\n    </div>\n    ' + footer() + '\n  </body>\n</html>' : '\n<!doctype>\n<html>\n  ' + head({ title: 'Mukhwak - ' + data.ang }) + '\n  <body>\n    <div class="container">\n      <h1> \u262C Aj Da Mukhwak <small>Ang ' + data.ang + '</small></h1>\n        <h4>' + data.date + '</h4>\n      <hr /> \n      <div class="jumbotron">\n        <div class="huge-font gurakhr">' + data.gurbani + '</div>\n      </div>\n      <h3>Translations</h3>\n      <div class="col-xl-6 huge-font gurakhr">' + data.punjabi + '</div>\n      <div class="col-xl-6 huge-font">' + data.english + '</div>\n    </div>\n    ' + footer() + '\n  </body>\n</html> \n';
};
