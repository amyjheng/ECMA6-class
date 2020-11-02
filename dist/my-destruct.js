"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = {
  name: 'Shinder',
  age: 28,
  gender: 'male'
};
var name = data.name,
    gender = data.gender,
    age = data.age,
    title = data.title; // 解構設定

_fakeConsole["default"].log(name, gender, age, title);

var nickname = data.name,
    myAge = data.age; // 解構設定

_fakeConsole["default"].log(nickname, myAge);

data.age++;
name = data.name;
gender = data.gender;
age = data.age;

// 設定給既有的變數
_fakeConsole["default"].log(name, gender, age);

var data2 = _objectSpread(_objectSpread({}, data), {}, {
  // 解構
  title: 'developer'
});

_fakeConsole["default"].log(JSON.stringify(data2));

var ar = [3, 5, 8];
var d = ar[0],
    e = ar[1],
    f = ar[2];
var g = ar[0],
    h = ar[1];

_fakeConsole["default"].log(d, e, f);

_fakeConsole["default"].log(g, h);

d = 7;
e = 88;
f = 999;

_fakeConsole["default"].log(d, e, f);

var ar2 = [2].concat(ar, [9]);

_fakeConsole["default"].log(JSON.stringify(ar2));