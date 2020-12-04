/*
Write a program that will ask for user's
name. The program will then greet the
user. If the user writes "name!" then
the computer yells back to the user.

Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

let readline = require('readline-sync');

function getInput(message) {
  return readline.question(message);
}

function isValidName(name) {
  return (name.trim() !== '');
}

function titleCase(fullName) {
  let nameArray = fullName.split(' ');
  let capitalizedArray = nameArray.map(name => {
    return name[0].toUpperCase() + name.slice(1);
  });
  return capitalizedArray.join(' ');
}

function greetUser() {
  let name = getInput('What is your name? ');
  while (!isValidName(name)) {
    name = getInput('Not a valid input. Try again.');
  }
  if (name.endsWith('!')) {
    name = name.slice(0, name.length - 1).toUpperCase();

    return `HELLO ${name}. WHY ARE WE SHOUTING?`;
  } else {
    name = titleCase(name);
    return `Hello ${name}.`;
  }
}

let repeat;
do {
  console.log(greetUser());
  repeat = getInput('Would you like to repeat? (y or n)');
} while (repeat === 'y');

//test with Liza, liza, Liza Couser, liza couser, Liza!, liza c!, '', ' '


/*
Problem:
-input
  -user inputs name (readline sync)
  -with or without exclamation point
-output
  -if exclamation point, all caps greeting + 'why are we screaming?'
  -else regular greeting ('hello bob.')
-internal
  -validate if string & not empty
  -check for exclamation point
  -if exclaimation point, rempove the punctuation and all caps it
  -respond appropriately (.toUpperCase())

Examples:
-see above PLUS
  -empty input
  -non-string input
  -name not capitalized
  -first and last name not capitalized

Datatypes:
-input string
-output string
-internal
  -to capitalize first and last name, may need to convert to array?

Algorithm:
-require rl-sync
-ask for name and save to variable name
-validate name is a non-empty string
-if endsWith exclamation point
  -name = name.toUpperCase()
  -return `HELLO ${name}! WHY ARE WE SHOUTING?`
-else
  -name = titleCaps(name);
  -return  `Hello ${name}.`

Abstraction:
  -get input
    -readline.question()
  -validate name
    -string
    -not empty (trim())
  -titleCaps()
    -split into array at ' '
    -for each name in array
    -name = name[0].toUpperCase + name.slice(1);
    -return name.join(' ')
*/

