var ListNode = function (key) {
    this.key = key
    this.next = null
};

var MyHashSet = function () {
    this.size = 997
    this.buckets = Array(this.size).fill(null)

};

MyHashSet.prototype.hash = function (key) {
    return key % this.size
}

MyHashSet.prototype.getBucketAndNode = function (key) {
    let index = this.hash(key)
    let bucket = this.buckets[index]
    return { index, bucket }
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    let { index, bucket } = this.getBucketAndNode(key)
    if (!bucket) {
        this.buckets[index] = new ListNode(key)
    } else {
        let current = bucket
        while (current) {
            if (current.key === key) return
            if (!current.next) break
            current = current.next
        }

        current.next = new ListNode(key)
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    let { index, bucket } = this.getBucketAndNode(key)
    if (!bucket) return
    if (bucket.key === key) {
        this.buckets[index] = bucket.next
        return
    }
    let current = bucket
    while (current.next) {
        if (current.next.key === key) {
            current.next = current.next.next
            return
        }

        current = current.next
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    let { bucket } = this.getBucketAndNode(key)
    let current = bucket
    while (current) {
        if (current.key === key) return true
        current = current.next
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */