// Practice Problem 15
// Given the following data structure, write some code to return
// an array which contains only the objects where all the numbers
// are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let answer = arr.filter(obj => {
  return Object.values(obj).flat().every(num => num % 2 === 0);
});
//you could also nest  .every() calls if you didn't want to use .flat()
console.log(answer);