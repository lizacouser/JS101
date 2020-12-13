/*
A double number is an even-length number whose
left-side digits are exactly the same as its
right-side digits. For example, 44, 3333,
103103, and 7676 are all double numbers,
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided
as an argument multiplied by two, unless the
argument is a double number; return double
numbers as-is.

Examples:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
*/

function twice(number) {
  let stringNum = String(number);
  let splitIndex = Math.floor((stringNum.length / 2));

  let numStart = stringNum.slice(0, splitIndex);
  let numEnd = stringNum.slice(splitIndex);

  if (numStart === numEnd) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));

/*
Problem
-input
  -number
-output
  -number * 2
  -or just the number if double number
-implicit
  -double numbers have even length
  -double numbers divided at the center match each other

Examples:
-see above
-assuming it's an integer

Datatypes:
-input number
-output number
-internal
  -treating numbers as strings, so you can
  compare the two sides of an evenly split number?

Algorithm:
-given a number
-slice String(number) at index((length / 2) - 1) and save to numStart and numEnd
-if numStart === numEnd
  -return number
else
  -return number * 2
*/
