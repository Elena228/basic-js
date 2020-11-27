const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if ((!members) || (!Array.isArray(members)))  
    return false;
  let result = '';
  for (let key of members) {
     if (typeof(key) === "string") {
      result +=key.match(/[A-Za-z]{1}/);
     }
  }
  return result.toUpperCase().split('').sort().join('');
};
