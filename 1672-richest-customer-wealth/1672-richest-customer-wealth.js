/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var WealthTotals = [];

  for (let i = 0; i < accounts.length; i++) {
    var customerTotal = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerTotal += accounts[i][j];
    }
    WealthTotals.push(customerTotal);
  }

  return Math.max(...WealthTotals);
};