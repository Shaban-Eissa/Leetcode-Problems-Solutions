/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop();
        } else if (operations[i] === 'D') {
            let double = parseInt(stack[stack.length - 1]) * 2
            stack.push(double);
        }
        else if (operations[i] === '+') {
            let plus = parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2]);
            stack.push(plus);
        } else {
            stack.push(parseInt(operations[i]));
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};