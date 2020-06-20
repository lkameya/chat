"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express.default)();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hellow world');
});
app.listen(port, function () {
  console.log('Rodando');
});