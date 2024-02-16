/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = (s) => [...new Set(s.split(""))].length;
