const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = '';
  let result = '';
  if (options.additionRepeatTimes) {
    options.additionSeparator =  (options.additionSeparator) || '|';
    const separateArr = new Array(options.additionRepeatTimes).fill(String(options.addition));
    addition = separateArr.join(options.additionSeparator);
  }
  else if (options.addition) {
    addition = String(options.addition);
  }

  if (!options.repeatTimes) options.repeatTimes = 1; 
  options.separator = (options.separator) || '+';
  const repeatArr = new Array(options.repeatTimes).fill((String(str) + addition));
  result = repeatArr.join(options.separator);
  
  return result;
};
  