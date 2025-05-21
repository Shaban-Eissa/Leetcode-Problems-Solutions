/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] === s[i]) {
      // If current char matches the last char in stack, increment count
      stack[stack.length - 1][1]++;
      
      // If count reaches k, pop the element
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      // Push new character with count 1
      stack.push([s[i], 1]);
    }
  }
  
  // Convert stack back to string
  return stack.map(([char, count]) => char.repeat(count)).join('');
};

console.log(removeDuplicates("deeedbbcccbdaa", 3));
console.log(removeDuplicates("deeedbbcccbdaa", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 1));
console.log(removeDuplicates("deeedbbcccbdaa", 4));
console.log(removeDuplicates("deeedbbcccbdaa", 5));
console.log(removeDuplicates("deeedbbcccbdaa", 6));
console.log(removeDuplicates("deeedbbcccbdaa", 7));
console.log(removeDuplicates("deeedbbcccbdaa", 8));
console.log(removeDuplicates("deeedbbcccbdaa", 9));
console.log(removeDuplicates("deeedbbcccbdaa", 10));
