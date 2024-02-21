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
    if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    }
  }
}


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Array(rooms.length).fill(false);
  let stack = [0];

  while (stack.length > 0) {
    let room = stack.pop();
    visited[room] = true;

    for (let key of rooms[room]) {
      if (!visited[key]) {
        stack.push(key);
      }
    }
  }

  for (let visit of visited) {
    if (!visit) return false;
  }

  return true;
};