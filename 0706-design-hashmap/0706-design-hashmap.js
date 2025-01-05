var ListNode = function (key, value) {
    this.key = key
    this.value = value
    this.next = null
};

var MyHashMap = function () {
    this.size = 997
    this.buckets = Array(this.size).fill(null)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let index = key % this.size
    if (!this.buckets[index]) {
        this.buckets[index] = new ListNode(key, value)
        return
    }
    let current = this.buckets[index]
    while (current) {
        if (current.key === key) {
            current.value = value
            return
        }
        if (!current.next) break
        current = current.next
    }
    current.next = new ListNode(key, value)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let index = key % this.size
    let current = this.buckets[index]
    while (current) {
        if (current.key === key) return current.value
        current = current.next
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let index = key % this.size
    let current = this.buckets[index]
    if (!current) return
    if (current.key === key) {
        this.buckets[index] = current.next
        if (!this.buckets[index]) {
            this.buckets[index] = null;
        }
        return
    }
    while (current.next) {
        if (current.next.key === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */