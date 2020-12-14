/*
Build a program that randomly generates Teddy's age,
and logs it to the console. Have the age be a random
number between 20 and 120 (inclusive).

Example:
Teddy is 69 years old!
*/


const MAX_AGE = 120;
const MIN_AGE = 20;

function getTeddysAge() {
  let randomAge = Math.floor(Math.random() * (MAX_AGE - MIN_AGE + 1)) + MIN_AGE;
  console.log(`Teddy is ${randomAge} years old!`);
}


getTeddysAge();
getTeddysAge();
getTeddysAge();
getTeddysAge();
getTeddysAge();
getTeddysAge();
getTeddysAge();


/*
Problem:
-input n/a
-output randomly generated age interpolated into string
-number between 20 and 120

Examples:
-'Teddy is 69 years old!'
-'Teddy is 20 years old!'
-'Teddy is 120 years old!'

Datatypes:
-internal numbers
-output is string


Algorithm:
-get a random number between 0 and 100
-add 20
*/
