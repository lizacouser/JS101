// Question 1
// Write three different ways to remove all
// of the elements from the following array:
let numbers = [1, 2, 3, 4];

// option one: while loop + pop()
while (numbers.length > 0) {
  numbers.pop();
}

// option two: for loop and shift()
numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);

// option three: replace length
numbers = [1, 2, 3, 4];
numbers.length = 0;

let answer = numbers;

// Question 2
// What will the following code output?
// Try to answer without running the code.
console.log([1, 2, 3] + [4, 5]);
// 1,2,34,5 (converts arrays to strings, then concatenates strings!)

// Question 3
// What will the following code output?
// Try to answer without running the code.
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
// 'hello there'

// Question 4
// What will the following code output?
// Try to answer without running the code.
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // makes SHALLOW copy, still referencing same objects!!
arr2[0].first = 42;
console.log(arr1);
// [{ first: 42 }, { second: "value2" }, 3, 4, 5]


// Question 5
// The following function unnecessarily uses two
// return statements to return boolean values.
// Can you rewrite this function so it only has
// one return statement and does not explicitly
// use either true or false?
// Try to come up with at least two different solutions.
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// Option 1:
function isColorValid1(color) {
  return (color === "blue" || color === "green");
}

// Option 2:
function isColorValid2(color) {
  let validColors = ['blue', 'green'];
  return validColors.includes(color);
}

answer = isColorValid1('blue');
answer = isColorValid2('blue');

console.log('Answer: ' + answer);