/*
Problem:
-input n number
-output nth fibonacci number
-Rules
  -1 is 1
  -2 is 1
  -3 is 2
  -2 is 3 etc
  -must be non-recursive
  -can't test any numbers larger than 78

Examples:
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Data:
-input number
-output number
-internal numbers

Algorithm:
-set variable fibonacciArray [1, 1];
-make array of fibonacci numbers by looping and summing
-access array at index n - 1

for n starting at 3,
  -sum last two elements of fibonacci array and push to fibonacci array
  -n ++
*/

function fibonacci(nth) {
  let fibArray = [1, 1];

  if (nth > 78) return 'Too big a number';

  for (let index = 2; index < nth; index += 1) {
    fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
  }

  return fibArray[nth - 1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
