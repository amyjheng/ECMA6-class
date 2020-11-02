"use strict";

require("./my-class02");

// import './my-proxy';
// import './my-destruct';
// import './my-arrow-func';
// import './my-template';
// import './my-array-methods';
// import './my-map-set';
// import './my-import01';
// import './my-import02';
// import './my-promise01';
// import './my-promise02';
// import './my-async-await';
// import './my-class01';
var f = function f(name) {
  document.querySelector('#info').innerHTML = "hello,".concat(name);
};

f("John");