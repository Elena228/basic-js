const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) != '[object Date]') 
    throw new Error('');
  let season = '';
  let month = date.getMonth();
  if ((month < 2) || (month == 11)) 
    season = 'winter';
  if ((month >= 2) && (month < 5)) 
    season = 'spring';
  if ((month >= 5) && (month < 8)) 
    season = 'summer';
  if ((month >= 8) && (month < 11))  
    season = 'autumn';
  return season;
};
