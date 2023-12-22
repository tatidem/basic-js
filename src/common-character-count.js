const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const frequencyMap1 = getFrequencyMap(s1);
  const frequencyMap2 = getFrequencyMap(s2);


  let commonCount = 0;
  for (const [char, count1] of frequencyMap1.entries()) {
    if (frequencyMap2.has(char)) {
      const count2 = frequencyMap2.get(char);
      commonCount += Math.min(count1, count2);
    }
  }

  return commonCount;
}
function getFrequencyMap(str) {
  const frequencyMap = new Map();
  for (const char of str) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }
  return frequencyMap;
}

module.exports = {
  getCommonCharacterCount
};
