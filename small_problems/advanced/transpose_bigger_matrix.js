/*

1  2  3  4   ==>   1 5 9
5  6  7  8   ==>   2 6 10
9  10 11 12  ==>   3 7 11
             ==>   4 8 12

0,0 => 0,0
0,1 => 1,0
0,2 => 2,0
0,3 => 3,0
1,0 => 0,1
1,1 => 1,1
1,2 => 2,1
1,3 => 3,1
2,0 => 0,2
2,1 => 1,2
2,2 => 2,2
2,3 => 3,2

*/

function transpose(matrix) {
  let transposed = [];

  matrix[0].forEach((_) => transposed.push([]));

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      transposed[colIdx][rowIdx] = matrix[rowIdx][colIdx];
    }
  }

  return transposed;
}


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]