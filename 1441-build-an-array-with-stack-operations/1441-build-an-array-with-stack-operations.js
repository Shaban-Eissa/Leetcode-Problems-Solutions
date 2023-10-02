var buildArray = function (target, n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (target.includes(i)) {
            result.push('Push');
        } else {
            result.push('Push');
            result.push('Pop');
        }
        if (i === target[target.length - 1]) return result;
    }
};