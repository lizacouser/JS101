/*
-input number, n
-output number, nth fib
-rules:
  -still recursive, but with memoization
  -saves computer answer for future reuse

data:
-input numnber
-output number
-internal:
  -object to store fib numbers;

examples:
fibonacci(3);        // 2
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

algorithm:
given a number num
create empty object
if num <=  2 return 1

check if n has a property in fibonacci object
if so, return fibObj[n]
else
fibObj[n] = fibObj[n-1] + fibObj[n-1]

*/

let fibObj = {};

function fibonacci(num) {
  if (num <= 2) return 1;

  if (fibObj.hasOwnProperty(num)) {
    return fibObj[num];
  }

  fibObj[num] = fibonacci(num - 2) + fibonacci(num - 1);

  return fibObj[num];
}

console.log(fibonacci(3));        // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050