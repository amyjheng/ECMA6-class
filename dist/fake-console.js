"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var info;

if (document && document.querySelector && document.querySelector('#info')) {
  info = document.querySelector('#info');
}

var _default = {
  log: function log() {
    for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
      msg[_key] = arguments[_key];
    }

    if (info) {
      info.innerHTML += msg.join(' ') + '<br>';
    } else {
      var _console;

      (_console = console).log.apply(_console, msg);
    }
  }
};
exports["default"] = _default;