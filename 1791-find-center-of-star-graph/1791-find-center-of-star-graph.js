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
 * @param {number[][]} edges
 * @return {number}
 */

var findCenter = function (edges) {
  let graph = new Graph();
  let center = 0;
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

  let allNodes = Object.keys(graph.adjacencyList);
  for (let node of allNodes) {
    let nodeConnections = graph.adjacencyList[node];
    if (nodeConnections.length === allNodes.length - 1) {
      center = node;
    }
  }
  return center;
};
