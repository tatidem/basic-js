const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date instanceof Date) {
    try {
      date.valueOf();
    } catch (error) {
      throw new Error('Invalid date!');
    }
  } else if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}


module.exports = {
  getSeason
};
