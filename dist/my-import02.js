"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

var _myExport = require("./my-export02");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_fakeConsole["default"].log(JSON.stringify(_myExport.ar2));

_fakeConsole["default"].log(_myExport.ar2 === _myExport.ar2);