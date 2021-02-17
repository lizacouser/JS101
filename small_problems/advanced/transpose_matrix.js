/*
-input nested array representing 3 x 3 matrix
-output nested array with elements transposed
-rules
  -don't modify given matrix
  -row 1 (matrix[0]) becomes column 1 (matrix[0][0], matrix[1][0], matrix[2][0])
  -row 2 (matrix[1]) becomes column 2 (matrix[0][1], matrix[1][1], matrix[2][1])
  -row 3 (matrix[0]) becomes column 3 (matrix[0][2], matrix[1][2], matrix[2][2])

1 5 8   ==>   1 4 3
4 7 2   ==>   5 7 9
3 9 6   ==>   8 2 6

examples 2

1 2 3   ==>   1 4 7
4 5 6   ==>   2 5 8
7 8 9   ==>   3 6 9

(1, 5, and 9 stay the same)

0,0 => 0,0
0,1 => 1,0
0,2 => 2,0
1,0 => 0,1
1,1 => 1,1
1,2 => 2,1
2,0 => 0,2
2,1 => 1,2
2,2 => 2,2

data:
-input nested array
-output nested array
-internal
  -object?, arrays

algorithm:
-given a matrix
-create new empty array transposedMatrix
-for each row in outer array
  map inner array
    -return element at 0 index of outer
-return transposedMatrix
*/

function transpose(matrix) {
  let transposed = [[],[],[]];

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix.length; colIdx += 1) {
      transposed[rowIdx][colIdx] = matrix[colIdx][rowIdx];
    }
  }
  return transposed;
}

function transposeInPlace(matrix) {
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix.length; colIdx += 1) {
      matrix[rowIdx][colIdx] = matrix[colIdx][rowIdx];
    }
  }
  return matrix;
}


function transposeMap(matrix) {
  return matrix.map((row, oldRowIdx, oldMatrix) => {
    return row.map((_, oldColIdx) => {
      return oldMatrix[oldColIdx][oldRowIdx];
    });
  });
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]