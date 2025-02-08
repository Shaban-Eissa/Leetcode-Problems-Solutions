/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    let n = tickets.length;
    let queue = [];

    for (let i = 0; i < n; i++) {
        enqueue(queue, [tickets[i], i]);
    }

    while (queue.length > 0) {
        let [ticket, index] = dequeue(queue);

        ticket -= 1;
        time += 1;
        if (ticket === 0) {
            k -= 1;
            if (k === 0) {
                break;
            }
        } else {
            enqueue(queue, [ticket, index]);
        }
    }
    return time;
};

const dequeue = (queue) => {
    if (queue.length === 0) return null;
    return queue.shift();
};

const enqueue = (queue, item) => {
    queue.push(item);
};

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
