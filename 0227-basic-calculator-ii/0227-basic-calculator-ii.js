var calculate = function (s) {
    let stack = [];
    let currentNumber = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isDigit(char)) {
            currentNumber = currentNumber * 10 + parseInt(char);
        }

        if ((!isDigit(char) && char !== ' ') || i === s.length - 1) {
            if (sign === '+') {
                stack.push(currentNumber);
            } else if (sign === '-') {
                stack.push(-currentNumber);
            } else if (sign === '*') {
                stack.push(stack.pop() * currentNumber);
            } else if (sign === '/') {
                let prev = stack.pop();
                stack.push(Math.trunc(prev / currentNumber));
            }
            sign = char;
            currentNumber = 0;
        }
    }
    return stack.reduce((sum, num) => sum + num, 0);
};

function isDigit(char) {
    return char >= '0' && char <= '9';
}

console.log(calculate("3+2*2"))
console.log(calculate("1+2*5/3+6/4*2"))
console.log(calculate("3+5/2"))
console.log(calculate("1-1+1"))