"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 轉譯 async/await 時需要用到
var myFunc = function myFunc(msec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(Math.floor(Math.random() * 100));
    }, msec);
  });
};

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var r1, r2, r3;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return myFunc(1300);

        case 2:
          r1 = _context.sent;

          _fakeConsole["default"].log(r1);

          _context.next = 6;
          return myFunc(1400);

        case 6:
          r2 = _context.sent;

          _fakeConsole["default"].log(r2);

          _context.next = 10;
          return myFunc(1200);

        case 10:
          r3 = _context.sent;

          _fakeConsole["default"].log(r3);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();