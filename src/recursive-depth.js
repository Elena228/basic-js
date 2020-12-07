const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let depth = 1;
    let maxDepth = 1;
    arr.forEach(element => {
     if (Array.isArray(element)) {
       depth = this.calculateDepth(element) + 1;
       if (depth > maxDepth) {
         maxDepth = depth;
       }
     }
    });
    return maxDepth;
  }
};