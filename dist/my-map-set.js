"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var map = new Map();
var obj = {};
map.set({}, {
  a: 1,
  b: 2
});
map.set({}, {
  a: 3,
  b: 4
});
map.set(obj, {
  a: 5,
  b: 6
});
map.set(obj, {
  a: 7,
  b: 8
}); // obj 的 reference 同一個

map.forEach(function (v, k) {
  _fakeConsole["default"].log(JSON.stringify(k) + ' ::: ' + JSON.stringify(v));
});

_fakeConsole["default"].log(map.size);

_fakeConsole["default"].log('---');

var set = new Set();
set.add({
  a: 1,
  b: 2
}).add({
  a: 1,
  b: 2
});
set.add(obj).add(obj).add({
  a: 1,
  b: 2
});
set.forEach(function (v) {
  _fakeConsole["default"].log(JSON.stringify(v));
});

_fakeConsole["default"].log(set.size);

set["delete"](obj);

_fakeConsole["default"].log('刪除 obj 之後：', set.size);

set.clear();

_fakeConsole["default"].log('清空之後：', set.size);