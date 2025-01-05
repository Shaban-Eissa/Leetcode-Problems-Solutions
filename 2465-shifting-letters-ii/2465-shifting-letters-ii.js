/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    let result = s.split('');
    let shiftArray = new Array(s.length + 1).fill(0);

    shifts.forEach(([start, end, direction]) => {
        shiftArray[start] += direction === 0 ? -1 : 1;
        shiftArray[end + 1] += direction === 0 ? 1 : -1;
    });

    for (let i = 1; i < shiftArray.length; i++) {
        shiftArray[i] += shiftArray[i - 1];
    }

    for (let i = 0; i < result.length; i++) {
        let charCode = result[i].charCodeAt(0) + shiftArray[i];
        if (charCode < 97) {
            charCode += 26;
        } else if (charCode > 122) {
            charCode -= 26;
        }
        result[i] = String.fromCharCode(charCode);
    }

    return result.join('');
};