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
  -must save the value of the previously calculated fibonacci (n-2)

Examples:
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Data:
-all numbers

Algorithm:
recursive
-if n is <= 2 return 1
-else
  -return fibonacci(n - 1) + fibonacci(n - 2)

memoization
-if n is <= 2 return 1
-let nMinusOne = 1;
-let nMinusTwo = 1;
-for (let count = 3; count <= nth; count += 1)
  fibonacci = nMinusOne + nMinusTwo
  nMinusOne = fibonacci
  nMinusTwo = nMinus1

*/

function fibonacci(nth) {
  if (nth <= 2) console.log(1);

  let nMinusOne = 1;
  let nMinusTwo = 1;
  let fibonacci;

  for (let count = 3; count <= nth; count += 1) {
    fibonacci = nMinusOne + nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = fibonacci;
  }
  console.log(fibonacci);
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

/*
Offered solution:

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

memorizes previously recursive stuff!!
*/
