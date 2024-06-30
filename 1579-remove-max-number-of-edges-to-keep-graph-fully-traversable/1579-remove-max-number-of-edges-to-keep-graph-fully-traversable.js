/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
      const alice = new UnionFind(n), bob = new UnionFind(n);

    // Count number of times parent changed
    let count = 0;

    // Check all type 3 edges
    for (let [type, u, v] of edges) {
        if (type === 3 && alice.union(u, v) && bob.union(u, v)) count++;
    }

    // Check all type 1 & 2 edges
    for (let [type, u, v] of edges) {
        if (type === 1 && alice.union(u, v)) count++
        if (type === 2 && bob.union(u, v)) count++;
    }

    // If size = 1 then all nodes are connected
    if (alice.size === 1 && bob.size === 1) return edges.length - count;
    else return -1;
};



class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill(null).map((_, i) => i);
        this.size = n;
    }

    find(i) {
        if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
        return this.parent[i];
    }
    union(i, j) {
        const x = this.find(i), y = this.find(j);
        if (x === y) return false;
        else {
            this.parent[x] = y;
            this.size--;
            return true;
        }
    }
};
