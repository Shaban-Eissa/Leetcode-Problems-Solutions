class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }

  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;

  let graph = new Graph();
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let node1 = edge[0];
    let node2 = edge[1];
    if (!graph.adjacencyList[node1]) {
      graph.addVertex(node1);
    }
    if (!graph.adjacencyList[node2]) {
      graph.addVertex(node2);
    }
    graph.addEdge(node1, node2);
  }

  let queue = [source];
  let visited = {};
  visited[source] = true;
  while (queue.length) {
    let node = queue.shift();
    if (node === destination) return true;
    let nodeConnections = graph.adjacencyList[node];
    for (let vertex of nodeConnections) {
      if (!visited[vertex]) {
        visited[vertex] = true;
        queue.push(vertex);
      }
    }
  }
  return false;
};
