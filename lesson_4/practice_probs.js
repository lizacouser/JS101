// Practice Problem 1
// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');
// [1, 2, 3] because 'hi' is truthy

// Practice Problem 2
// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});
// [undefined, undefined, undefined]

// Practice Problem 3
// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);
// [1, 4, 9] because of an implicit return

// Practice Problem 4
// What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length
// 11 because pop() returns the popped element, which has a length of 11

// Practice Problem 5
// What is the callback's return value in the following code? 
// Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});
// return value of callback is 2, 4, 6 
// (The expression num = num * 2 is an assignment expression
// and will evaluate as the expression on the right-hand
// side of the assignment)
// return value of every is true

// Practice Problem 6
// How does Array.prototype.fill work? Is it destructive?
// How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
// look on mdn
// fill changes all elements to some static value 
// from a certain index to a certain index
// yes destructive
// this returns [1, 1, 1, 1, 1]

// Practice Problem 7
// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
// [undefined, 'bear']? because only provided a return value for bear?

// Practice Problem 8
// Take a look at the following array.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// Write a program that uses this array to create an object 
// where the names are the keys and the values are the 
// positions in the array:
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
let flintstonePosition = {};
flintstones.forEach((name, index) => flintstonePosition[name] = index);
console.log(flintstonePosition);

// Practice Problem 9
// Add up all of the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
Object.values(ages).reduce((sum, age) => sum + age);

// Practice Problem 10
// Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
Object.values(ages).sort((a, b) => a - b)[0];
// proposed solution:
// Math.min(...Object.values(ages));

// Practice Problem 11
// Create an object that expresses the frequency with which 
// each letter occurs in this string:
let statement = "The Flintstones Rock";
// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
let charCount = {};
statement.replace(/ /g, '').split('').forEach(char => {
  if (!charCount.hasOwnProperty(char)) {
    charCount[char] = 0;
    // result[char] = result[char] || 0 is another way to say this logic!
  }
  charCount[char] += 1;
});
console.log(charCount);