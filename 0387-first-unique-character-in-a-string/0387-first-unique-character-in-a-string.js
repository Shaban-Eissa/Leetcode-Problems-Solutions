/**
 * @param {string} s
 * @return {number}
 */

let queue = []
var firstUniqChar = function (s) {

    for (let i = 0; i < s.length; i++) {
        enqueue(s[i])
    }

    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i
        }
    }
    return -1
};

const enqueue = (char) => {
    queue.push(char)
}

const dequeue = () => {
    return queue.shift()
}
