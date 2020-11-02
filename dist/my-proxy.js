"use strict";

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myTarget = {
  name: 'David',
  age: 24,
  title: 'engineer',
  ageIncrease: function ageIncrease() {
    this.age++;
  }
};
var myHandle = {
  get: function get(target, prop) {
    return prop in target ? target[prop] : '沒有這個屬性!';
  },
  set: function set(target, prop, value) {
    if (prop === 'age' && isNaN(value / 1)) {
      throw new ReferenceError('年齡必須是數值!');
    }

    target[prop] = value;
    return true;
  }
};
var proxy = new Proxy(myTarget, myHandle);

_fakeConsole["default"].log('name: ' + proxy.name);

_fakeConsole["default"].log('gender: ' + proxy.gender);

proxy.ageIncrease();

try {
  proxy.age = 'peter';
} catch (error) {
  _fakeConsole["default"].log(error);
}

_fakeConsole["default"].log(JSON.stringify(proxy));