/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const graph = new Array(n).fill().map((_) => []);
  for (const [src, dest] of edges) {
    graph[src].push(dest);
  }

  const ans = new Array(n).fill().map((_) => []);
  for (let node = 0; node < n; node++) {
    dfs(node, node, ans, graph);
  }

  return ans;
};

function dfs(curr, ancestor, ans, graph) {
  for (const child of graph[curr]) {
    if (ans[child].at(-1) === ancestor) continue;

    ans[child].push(ancestor);
    dfs(child, ancestor, ans, graph);
  }
}