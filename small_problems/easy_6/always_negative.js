/*
Always Return Negative
Write a function that takes a number as an argument.
If the argument is a positive number, return the
negative of that number. If the argument is a
negative number, return it as-is.

Examples:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
*/

/*
P:
-input int
-output negative int
-implicit 0 returns -0

E:
-see above

D:
-numbers

A:
-given a number
-return -Math.abs(number)
*/

function negative(number) {
  return -Math.abs(number);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

//with ternary
function negative2(number) {
  return (number >= 0 && (1 / number) !== -Infinity) ? -number : number;
}

negative2(5);     // -5
negative2(-3);    // -3
negative2(0);     // -0
negative2(-0);     // -0