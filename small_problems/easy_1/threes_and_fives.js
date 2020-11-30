/*
Write a function that computes the sum
of all numbers between 1 and some other
number, inclusive, that are multiples
of 3 or 5. For instance, if the supplied
number is 20, the result should be 98
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in
is an integer greater than 1.

Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

*/

let multisum = integer => {
  let sum = 0;
  for (let num = integer; num > 1; num -= 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(multisum(3));     // 3
console.log(multisum(5));     // 8
console.log(multisum(10));    // 33
console.log(multisum(1000));  // 234169
console.log(multisum(4));     // 3
console.log(multisum(11));    // 33
console.log(multisum(2));     // 0

/*
Problem:
-input
  -integer > 1
-internal
  -find multiples of 3 and 5 between 1 and number
  -sum those multiples (including number if divisible by 3 or 5)
-output
  -sum of the multiples

Examples:
3     // 3
5     // 5
10    // 3 + 5 + 6 + 9 + 10 = 33
1000  // 234169
4     // 3
11    // 33
2     // 0

Datatypes:
-input = number
-output = number
-internal
  -array of numbers divisible by 3 or 5, reduce array
  -OR for loop numbers
    -counting down from 33, add if divisible by 3 or 5

Algorithm:

START
# given a positive integer
SET iterator = number
SET sum = 0
WHILE iterator > 1
  if (iterator % 3 === 0 || iterator % 5 === 0)
    sum += iterator
  iterator -= 1
PRINT sum
END

*/
