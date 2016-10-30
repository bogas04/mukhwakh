'use strict';

var express = require('express');
var cors = require('cors');
var hukamnama = require('hukamnama-json');

var template = require('./template');

var server = express().use(cors()).use(express.static(__dirname + '/public')).get('/api', function (req, res) {
  return hukamnama().then(function (data) {
    return res.status(200).json(Object.assign({}, { data: data }, { error: false }));
  }).catch(function (e) {
    return res.status(200).json({ error: true });
  });
}).get('/', function (req, res) {
  return hukamnama().then(function (data) {
    return res.send(template({ data: data }));
  }).catch(function (err) {
    return res.send(template({ error: true, err: err }));
  });
}).get('*', function (req, res) {
  return res.send(template({ error: true, err: 404 }));
}).listen(process.env.PORT || 8080, function () {
  return console.log('Server running on port: ' + server.address().port);
});
