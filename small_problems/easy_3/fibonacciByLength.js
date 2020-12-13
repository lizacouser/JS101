/*
The Fibonacci series is a series of numbers
(1, 1, 2, 3, 5, 8, 13, 21, ...) such that
the first two numbers are 1 by definition,
and each subsequent number is the sum of the
two previous numbers.

Write a function that calculates and returns
the index of the first Fibonacci number that
has the number of digits specified by the
argument. (The first Fibonacci number has
an index of 1.)

You may assume that the argument is always
an integer greater than or equal to 2.
*/

function fibonacciIndexByLength(numDigits) {
  let index = 1;
  let firstNumber = 0;
  let secondNumber = 1;
  let fibNum;

  while (true) {
    fibNum = firstNumber + secondNumber;
    index += 1;
    firstNumber = secondNumber;
    secondNumber = fibNum;

    if (Math.floor(fibNum / (10 ** (numDigits - 1))) > 0) {
      break;
      // String(fibNum).length < numDigits also works here
    }

    if (secondNumber === firstNumber && secondNumber > 1) {
      return "This result isn't reliable";
    }
  }
  return index;
}

console.log(fibonacciIndexByLength(100));

/*
Problem:
-input
  -integer number of digits
-output
  -index of fibonacci number with that many digits
-implicit
  -first fib has index of 1

Examples:
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

Datatypes:
-input number
-output number
-internal
  -index makes me think array, but actually i think it should just
  loop through calculations until it finds something with that length

Algorithm:
-given a number of digits numDigits
-set digits to 1
-set index to 1
-while digits is less than numDigits
  -set fibNum to fibonacci(index)
  -if Math.floor(fibNum / (10 ** numDigits)) > 0
    -digits = numDigits
    -break;
  -index += 1;

Abstraction:
-how to find fibonacci number
  -index 1 = 1
  -index 2 = 2
  -index 3 = index 2 + index 1
  -index 4 = index 2 + index 3
  etc.
-aka it's recursive, but recursive run time too long.
just remember last added values in loop.

-given an index
-if inded < 2 return index
-else return fibonacci(index - 1) + fibonacci(index - 2)
*/
