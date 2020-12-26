
//Question 1
// Will this code  raise an error?
let numbers = [1, 2, 3];
console.log(numbers[6] = 5);
// No, the array will be [1, 2, 3, <3 empty items>, 5]
// returns 5

//Bonus
let numbers2 = [1, 2, 3];
numbers2[6] = 5;
console.log(numbers2[4]);  // what will this line return?
// This will return undefined,
// even though the array itself just says 3 empty items
// AKA if you use map() it will only map 4 numbers, not 7


// Question 2
// How can you determine whether a given string ends
// with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// easiest
console.log(str1.endsWith("!")); // true

// Iterate through array
for (let charIdx = 0; charIdx < str1.length; charIdx += 1) {
  if (str2[charIdx] === '!') {
    console.log(true);
    break;
  }
}

// other methods
console.log(!!str1.search('!'));


// Question 3
// Determine whether the following object of people
// and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// searches through stuff
console.log(ages.hasOwnProperty('Spot'));


// Question 4
// Using the following string, create a new string
// that contains all lowercase letters except for
// the first character, which should be capitalized.
// (See the example output.)
let munsters = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newMunsters = munsters[0].toUpperCase() +
  munsters.slice(1).toLowerCase();
console.log(newMunsters);


// Question 5
// What will the following code output?
console.log(false == '0');
console.log(false === '0');
// true then false

// Question 6
// We have most of the Munster family in our ages object:
let additionalAges = { Marilyn: 22, Spot: 237 };
// Add entries for Marilyn and Spot to the object:

Object.assign(ages, additionalAges);
console.log(ages);


// Question 7
// Determine whether the name Dino appears in
// the strings below -- check each string separately):
let string1 = "Few things in life are as important as house training your pet dinosaur.";
let string2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(string2.includes('Dino'));

// Question 8
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
console.log(flintstones);


// Question 9
// How can we add multiple items to our array?
// ('Dino' and 'Hoppy')
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

// Question 10
// Return a new version of this sentence that ends
// just before the word house. Don't worry about
// spaces or punctuation: remove everything starting
// from the beginning of house to the end of
// the sentence.
let advice = "Few things in life are as important as house training your pet dinosaur.";
// => 'Few things in life are as important as '

console.log(advice.split('house')[0]);
console.log(advice.slice(0, advice.indexOf('house')));