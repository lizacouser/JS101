// Practice Problem 9
// Given the following data structure, return a ***new array*** with
// the same structure, but with the subarrays ordered--
// alphabetically or numerically as appropriate --
// in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let answer = arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort(); // make a copy so it returns new array!!
  } else if (typeof innerArray[0] === 'number') {
    return innerArray.slice().sort((a, b) => a - b);
  }
  return undefined;
});
console.log(answer);