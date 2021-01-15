// Practice Problem 10
// Perform the same transformation of sorting the subarrays we
// did in the previous exercise with one difference; sort the
// elements in descending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let answer = arr.map(innerArray => {
  if (typeof innerArray[0] === 'string') {
    return innerArray.slice().sort().reverse();
  } else if (typeof innerArray[0] === 'number') {
    return innerArray.slice().sort((a, b) => b - a);
  }
  return undefined;
});
console.log(answer);