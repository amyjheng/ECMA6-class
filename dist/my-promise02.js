"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myFunc = function myFunc(msec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(Math.floor(Math.random() * 100));
    }, msec);
  });
};

myFunc(1300).then(function (r) {
  _fakeConsole["default"].log(r);

  return myFunc(1400);
}).then(function (r) {
  _fakeConsole["default"].log(r);

  return myFunc(1200);
}).then(function (r) {
  _fakeConsole["default"].log(r);
});