/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let stack = []
    for (let i = 0; i < logs.length; i++) {
        if(logs[i] === "../") {
            stack.pop()
        } else if(logs[i] === "./") {
            continue
        } else {
            stack.push(logs[i])
        }
    }
    return stack.length
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]))
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]))
console.log(minOperations(["d1/","../","../","../"]))