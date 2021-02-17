/*
-input nested array representing 3 x 3 matrix
-output nested array with elements rotated 90 degrees
-rules
  -don't modify given matrix

1 5 8   ==>   3 4 1
4 7 2   ==>   9 7 5
3 9 6   ==>   6 2 8

examples 2

1  2  3  4   ==>   9  5 1
5  6  7  8   ==>   10 6 2
9  10 11 12  ==>   11 7 3
             ==>   12 8 4


0,0 => 0,2
0,1 => 1,2
0,2 => 2,2
0,3 => 3,2
1,0 => 0,1
1,1 => 1,1
1,2 => 2,1
1,3 => 3,1
2,0 => 0,0
2,1 => 1,0
2,2 => 2,0
2,3 => 3,0

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

function rotate90(matrix) {
  let transposed = [];

  matrix[0].forEach((_) => transposed.push([]));

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      transposed[colIdx][matrix.length - 1 - rowIdx] = matrix[rowIdx][colIdx];
    }
  }

  return transposed;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]