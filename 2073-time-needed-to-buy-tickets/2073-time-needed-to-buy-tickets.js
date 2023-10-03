/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let countTime = 0;
    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] == 0) {
                return countTime;
            }
            if (tickets[i] > 0) {
                tickets[i] -= 1;
                countTime += 1;
            }
        }
    }
    return countTime
};