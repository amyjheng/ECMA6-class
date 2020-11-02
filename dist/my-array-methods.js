"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ar = [1, '2', 3, 4, 5, '6', '7', 8];
var ar2 = ar.filter(function (el, index, array) {
  return typeof el === 'number';
});

_fakeConsole["default"].log('ar2:', ar2.toString());

var ar3 = ar.map(function (el) {
  return el * el;
});

_fakeConsole["default"].log('ar3:', ar3.toString());

var ar4 = ar.reduce(function (previousValue, currentValue, index) {
  _fakeConsole["default"].log(previousValue, currentValue, index);

  return previousValue * 1 + currentValue * 1;
});

_fakeConsole["default"].log('ar4:', ar4.toString(), _typeof(ar4));