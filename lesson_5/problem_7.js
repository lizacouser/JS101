
// Practice Problem 7
// Given the following code, what will the final values of a and
// b be ? Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, pointer to b]

arr[0] += 2;  // [4, pointer to b]
arr[1][0] -= a; // [4, [3, 8]]
// a = 2
// b = [3, 8]