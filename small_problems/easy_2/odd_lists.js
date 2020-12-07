/*
Write a function that returns an Array that
contains every other element of an Array that
is passed in as an argument. The values in the
returned list should be those values that are
in the 1st, 3rd, 5th, and so on elements of
the argument Array.

Examples:
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
*/

/*
Problem:
-input
  - an array of values
-output
  - array of every other element in input array
  - every odd value
-implicit
  -actually based on even index

Examples:
-empty array returns empty array
-array of 1 element returns that elements
-(see above)

Data types:
-input: array
-output: array
-methods: for loop or array methods (forEach, map, etc)

Algorithm:
-given an array of 0 or more values
-make new empty array odds
-iterate through array indices, adding 2 each time
  -push values at even indices onto odds
-return odds
*/

function oddities(arr) {
  let odds = [];
  for (let ind = 0; ind < arr.length; ind += 2) {
    odds.push(arr[ind]);
  }
  return odds;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//try to solve problem a different way to get an array of evens
function evenness(arr) {
  let evens = arr.filter(element => arr.indexOf(element) % 2 === 1);
  return evens;
}

console.log(evenness([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenness([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenness(["abc", "def"])); // logs ['def']
console.log(evenness([123])); // logs []
console.log(evenness([])); // logs []