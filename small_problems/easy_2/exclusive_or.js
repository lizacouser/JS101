/*
The || operator returns a truthy value if
either or both of its operands are truthy,
a falsey value if both operands are falsey.
The && operator returns a truthy value if
both of its operands are truthy, and a
falsey value if either operand is falsey.
This works great until you need only one
of two conditions to be truthy, the
so-called exclusive or.

In this exercise, you will write a function
named xor that takes two arguments, and
returns true if exactly one of its arguments
is truthy, false otherwise. Note that we are
looking for a boolean result instead of a
truthy/falsy value as returned by || and &&.

Examples:
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
*/

function xor(value1, value2) {
  if (value1 && value2) return false;
  else {
    return !!(value1 || value2);
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/*
Suggested:

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

or

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
*/


/*
Problem:
-input: two arguments
-output: returns true if only one argument is truthy, false otherwise
-remember: returns boolean

Examples:
-see above
-edge case = no input

Data types:
-input: any two arguments
-output: boolean
-internal: comparators

Algorithm:
-given and two arguments
-if value1 is truthy && value2 is truthy, return false
-else return (value1 || value2) ? : true : false
*/
