/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
    const countSetBits = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    let targetBits = countSetBits(num2);
    let currentBits = countSetBits(num1);
    let result = num1;

    if (currentBits < targetBits) {
        let bit = 0;
        while (currentBits < targetBits) {
            if ((result & (1 << bit)) === 0) {
                result |= (1 << bit);
                currentBits++;
            }
            bit++;
        }
    } else if (currentBits > targetBits) {
        let bit = 0;
        while (currentBits > targetBits) {
            if ((result & (1 << bit)) !== 0) {
                result &= ~(1 << bit);
                currentBits--;
            }
            bit++;
        }
    }

    return result;
};