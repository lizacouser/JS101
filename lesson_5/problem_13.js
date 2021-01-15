// Practice Problem 13
// Given the following data structure, sort the array so that
// the sub - arrays are ordered based on the sum of the odd
// numbers that they contain.
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should
// look like this:
// [[1, 8, 3], [1, 6, 7], [1, 5, 3]]
let answer = arr.sort((a, b) => {
  let aSum = a.filter(num => num % 2 === 1).reduce((acc, val) => acc + val);
  let bSum = b.filter(num => num % 2 === 1).reduce((acc, val) => acc + val);
  return aSum - bSum;
});

console.log(answer);