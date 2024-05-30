/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const size = arr.length;
    let result = 0;

    for (let i = 0; i < size; i++) {
        let current = arr[i];

        for (let k = i + 1; k < size; k++) {
            current = current ^ arr[k];
            if (current > 0) continue;
            result += k - i;
        }
    }
    return result;
};