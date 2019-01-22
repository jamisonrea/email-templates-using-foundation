module.exports = function (val1, val2, options) {
  let val = val1 || val2;
  return options.fn(val);
};