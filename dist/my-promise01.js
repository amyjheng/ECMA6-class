"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Hello'); // reject('bad');
  }, Math.random() * 1000);
}).then(function (result) {
  _fakeConsole["default"].log("result: ".concat(result));

  return 'hi';
}).then(function (a) {
  // throw new Error('abc');
  _fakeConsole["default"].log("a: ".concat(a));
})["catch"](function (ex) {
  _fakeConsole["default"].log("ex: ".concat(ex.toString()));
}).then(function (b) {
  _fakeConsole["default"].log("b: ".concat(b));
});