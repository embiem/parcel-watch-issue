import "babel-polyfill";

if (!Object.values) {
  const values = require("object.values");
  values.shim();
}
// correct modulo
window.mod = function(left, n) {
  return (left % n + n) % n;
};
