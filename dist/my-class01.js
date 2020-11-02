"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fakeConsole = _interopRequireDefault(require("./fake-console"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  // 建構函式
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unkown';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unkown';

    _classCallCheck(this, Person);

    this.name = name; // 設定屬性

    this.age = age;
    this.gender = gender;
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " ").concat(this.age, " ").concat(this.gender);
    }
  }]);

  return Person;
}();

var _default = Person;
exports["default"] = _default;

_fakeConsole["default"].log(new Person());

var p2 = new Person('Flora', 23, 'female');

_fakeConsole["default"].log(p2);

_fakeConsole["default"].log(p2.constructor.name);