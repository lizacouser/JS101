// Practice Problem 8
// Using the forEach method, write some code to output all vowels
// from the strings in the arrays. Don't use a for or while loop.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = '';
Object.keys(obj).forEach(key => { // iterate through keys
  obj[key].forEach(word => {  // here it would be easier to iterate through values!
    word.split('').forEach(char => {
      if ('aeiou'.includes(char)) {
        vowels += char;
      }
    });
  });
});
let answer = vowels;

console.log(answer);