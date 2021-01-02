/*
Name Swapping
Write a function that takes a string argument
consisting of a first name, a space, and a
last name, and returns a new string consisting
of the last name, a comma, a space, and the
first name.

Examples:
swapName('Joe Roberts');    // "Roberts, Joe"
*/

/*
P:
-input string with two names
-output string with names reversed, and comma between

E:
-joe roberts => roberts, joe
-beyonce => beyonce
-anna nicole smith => Smith, Anna Nicole

D:
-input string
-output string
-internal split array

A:
-given a string
-split into array [first, last] by ' '
-return 'last + ',' + first'
*/

function swapName(name) {
  let [first, last] = name.split(' ');
  return last + ', ' + first;
}

swapName('Joe Roberts');    // "Roberts, Joe"

// or

function swapName2(name) {
  return name.split(' ').reverse().join(', ');
}

// with more or less than two names
function swapName3(name) {
  let nameArray = name.split(' ');
  if (nameArray.length === 1) return name;
  let last = nameArray.pop();
  return `${last}, ${nameArray.join(' ')}`;
}

swapName3('Anna Nicole Smith');    // "Smith, Anna Nicole"
swapName3('Rihanna');    // "Rihanna"