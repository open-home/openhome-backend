function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

var uaz = {};
console.log(guid());

var a = {temperature: 27.8, active: 1};
var b = {temperature: 30, active: 0, threshold: 23};
var c = Object.assign(b, a);
console.log(c);