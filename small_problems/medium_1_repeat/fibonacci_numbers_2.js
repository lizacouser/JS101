/*
-input number n
-output number (nth fibonacci number)

-rules
  -procedural
  -only accepts numbers smaller than 78 and greater than 0

-examples:
fibonacci(3);        // 2
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

data:
-input number
-output number
-internally numbers + arrays

algorithm:
# given a number n
if n <= 2, return 1
create variable lastfib = 1
create variable secondtolastfib = 1
loop through numbers from 3 up to n
[lastFib, secondtolastfib] = [secondtolastfib + lastfib, lastfib]
return lastfib
*/

function fibonacci(num) {
  if (num <= 2) return 1;
  if (num > 78) return "Too Big";

  let lastFib = 1;
  let currentFib = 1;

  for (let count = 3; count <= num; count += 1) {
    [currentFib, lastFib] = [currentFib + lastFib, currentFib];
  }

  return currentFib;
}

fibonacci(3);        // 2
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050