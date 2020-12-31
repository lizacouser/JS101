// Question 1
// Will the following functions return the same results?
// Try to answer without running the code or looking at
// the solution.

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // prints {prop1: 'hi there'}
console.log(second()); // auto inserts a semi-colon, prints undefined


// Question 2
// What does the last line in the following code output?
// Try to answer without running the code or looking at
// the solution.

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // {first: [1, 2]}

// Question 3
// Given the following similar sets of code, what will
// each code snippet print?

// A)
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
// messWithVars(["one"], ["two"], ["three"])
// doesn't work cuz you cant assign an object to an object?


console.log(`one is: ${one}`); // 'one is: one'
console.log(`two is: ${two}`); // 'two is: two'
console.log(`three is: ${three}`); // 'three is: three'

// B)
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
// better but still doesn't work cuz you cant assign an object to an object?

console.log(`one is: ${one}`); // 'one is: one'
console.log(`two is: ${two}`); // 'two is: two'
console.log(`three is: ${three}`); //'three is: three'

// C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // 'one is: two'
console.log(`two is: ${two}`); //'two is: three'
console.log(`three is: ${three}`); // 'three is: one'


// Question 4
// Ben was tasked to write a simple JavaScript function
// to determine whether an input string is an IP address
// using 4 dot-separated numbers, e.g., 10.4.5.11. He is
// not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber.
// It determines whether a string is a numeric string between
// 0 and 255 as required for IP numbers and asked Ben to use
// it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  
  return true;
}
// Alyssa reviewed Ben's code and said, "It's a good start,
// but you missed a few things. You're not returning a false
// condition, and you're not handling the case when the input
// string has more or less than 4 components, e.g., 4.5.5 or
// 1.2.3.4.5: both those values should be invalid."
// Help Ben fix his code.