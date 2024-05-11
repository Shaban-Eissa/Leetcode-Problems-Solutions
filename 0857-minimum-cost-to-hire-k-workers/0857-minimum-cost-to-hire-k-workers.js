/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, K) {
  let workers = Array(quality.length)
    .fill(0)
    .map((_, i) => ({ ratio: wage[i] / quality[i], q: quality[i] }));
  workers.sort((a, b) => a.ratio - b.ratio);

  let qsum = 0,
    maxHeap = [],
    res = Infinity;
  for (let { ratio, q } of workers) {
    if (maxHeap.length > K - 1) {
      qsum -= maxHeap.shift();
    }
    maxHeap.push(q);
    maxHeap.sort((a, b) => b - a);
    qsum += q;
    if (maxHeap.length === K) {
      res = Math.min(res, qsum * ratio);
    }
  }
  return res;
};