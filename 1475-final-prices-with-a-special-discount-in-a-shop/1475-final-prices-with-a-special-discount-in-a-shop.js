/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let result = []

    for (let i = 0; i < prices.length; i++) {
        let j = i + 1
        if (prices[i] >= prices[j]) {
            result.push(prices[i] - prices[i + 1])
        }
        else {
            while (j <= prices.length) {

                if (prices[i] >= prices[j]) {
                    result.push(prices[i] - prices[j])
                    break;
                }
                else if (j === prices.length - 1 && prices[i] < prices[j]) {
                    result.push(prices[i])
                    break
                }

                j += 1

            }
        }
    };
    result.push(prices[prices.length - 1])
    return result
}