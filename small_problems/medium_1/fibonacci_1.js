/*
Problem
-input number (n)
-output nth fibonacci number
-Rules
  -1 is 1
  -2 is 1
  -3 is 2
  -2 is 3 etc
  -must be recursive

Example:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
-edge cases, non-numeric input

Data types:
-input number
-output is number
-internal numbers, arithmetic

Algorithm:
-given a number n
-if n = 1, return 1
-if n is 2, return 1
-else
  -return fibonacci(n - 1) + fibonacci(n - 2);
*/

function fibonacci(num) {
  if (invalidNumber(num)) return undefined;
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function invalidNumber(num) {
  return typeof num !== 'number' || Number.isNaN(num);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
fibonacci('a');