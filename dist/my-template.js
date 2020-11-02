"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var info = document.querySelector('#info');

var tplBall = function tplBall(o) {
  return "<div style=\"border-radius: 50%; text-align: center; position: absolute;\n        width: ".concat(o.size || 60, "px; height: ").concat(o.size || 60, "px;\n        line-height: ").concat(o.size || 60, "px;\n        left: ").concat(o.left || 0, "px; top: ").concat(o.top || 0, "px; background-color: ").concat(o.bg, ";\n        \">").concat(o.n, "</div>");
};

var data = [{
  n: 1,
  bg: 'red'
}, {
  n: 2,
  bg: 'orange',
  left: 60,
  top: 60
}, {
  n: 3,
  bg: 'yellow',
  left: 100,
  top: 100,
  size: 200
}, {
  n: 4,
  bg: 'green',
  left: 120,
  top: 80,
  size: 80
}];
data.forEach(function (el) {
  return info.innerHTML += tplBall(el);
});