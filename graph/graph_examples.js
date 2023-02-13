// Edge List - show every connections by all edges
const graph = [[0,2], [2,3], [2,1], [1,3]]

// Adjacency List - The index of the array is the value of the actual Graph node
const graph2 = [[2], [2,3], [0,1,3], [1,2]]
const graph3 = {
  0: [2],
  1: [2,3],
  2: [0,1,3],
  3: [1,2]
}

//  Adjacency Matrix = 0 or 1 represents whethere there is a connect
const graph4 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]

const graph5 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
}
