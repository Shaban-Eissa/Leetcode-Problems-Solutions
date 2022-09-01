/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  var counter = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime <= endTime[i] && queryTime >= startTime[i]) {
      counter += 1;
    }
  }

  return counter;
};