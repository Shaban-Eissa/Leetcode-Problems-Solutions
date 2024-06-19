/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m * k) return -1;
    let l = 1, r = Math.max(...bloomDay);
    while(l <= r) {
        const day = Math.floor((l + r) / 2);
        let flowerCount = 0, bouquetCount = 0;
        for(const bloom of bloomDay) {
            if(bloom > day) {
                flowerCount = 0;
            } else {
                flowerCount++;
                if(flowerCount >= k) {
                    bouquetCount++;
                    flowerCount = 0;
                }
            }
        }
        if(bouquetCount < m) {
            l = day + 1;
        } else {
            r = day - 1;
        }
    } 
    return l;
};