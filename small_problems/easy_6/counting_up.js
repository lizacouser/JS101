/*
Counting Up
Write a function that takes an integer argument, and
returns an array containing all integers between 1
and the argument (inclusive), in ascending order.

You may assume that the argument will always be a
positive integer.

Examples:
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
sequence(0);    // []
*/

/*
P:
-input integer
-output array of all insts between 1 and argument
-rules: int will always be positive

E:
-see above
-zero returns empty array?

D:
-input number
-output array of numbers

A:
-given a number num
-create empty array
-for count = 1 -> count = num
  -array.push(count)
-return array
*/

function sequence(num) {
  let sequence = [];

  for (let count = 1; count <= num; count += 1) {
    sequence.push(count);
  }
  return sequence;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
sequence(0);    // []