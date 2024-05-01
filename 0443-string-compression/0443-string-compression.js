/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0, count = 1;

    for (let read = 0; read < chars.length; read++) {
        if (chars[read] === chars[read + 1]) {
            count++;
        } else {
            chars[write++] = chars[read];
            if (count > 1) {
                for (let digit of count.toString()) {
                    chars[write++] = digit;
                }
            }
            count = 1;
        }
    }
    return write;
};