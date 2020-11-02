"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var f1 = function f1(a) {
  return a * a;
};

var f2 = function f2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
  return a * a;
};

var obj = {
  v: void 0,
  // this 為 undefined
  f3: function f3() {
    return _this;
  },
  // this 為 undefined
  f4: function f4() {
    return this;
  },
  f5: function f5() {
    return this;
  }
};

_fakeConsole["default"].log(f1(8), f2());

_fakeConsole["default"].log(_typeof(obj.f3()), _typeof(obj.f4()), _typeof(obj.f5()));

_fakeConsole["default"].log(_typeof(obj.v));