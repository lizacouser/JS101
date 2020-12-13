/*
Create a simple madlib program
that prompts for a noun, a verb,
an adverb, and an adjective, and
injects them into a story that
you create.

Example:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/


const READLINE = require('readline-sync');

let invalidInput = string => {
  return string.trim() === '';
};

let aOrAn = followingWord => {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  if (VOWELS.includes((followingWord[0]))) {
    return 'an ' + followingWord;
  } else {
    return 'a ' + followingWord;
  }
};

while (true) {
  console.clear();
  console.log('Welcome to Mad Libs!');
  let noun = READLINE.question('Enter a noun: ');
  while (invalidInput(noun)) {
    noun = READLINE.question('You must enter something. Try again: ');
  }

  let verb = READLINE.question('Enter a present tense verb: ');
  while (invalidInput(verb)) {
    verb = READLINE.question('You must enter something. Try again: ');
  }

  let adjective = READLINE.question('Enter an adjective: ');
  while (invalidInput(adjective)) {
    adjective = READLINE.question('You must enter something. Try again: ');
  }

  let adverb = READLINE.question('Enter a adverb: ');
  while (invalidInput(adverb)) {
    adverb = READLINE.question('You must enter something. Try again: ');
  }

  console.log(`My ${adjective} ${noun} ${verb}s ${adverb} around the room.`);
  console.log(`I tell my ${noun} to stop, but it's hard to stop ${aOrAn(adjective)} ${noun} who wants to ${verb}.`);
  console.log(`"You ${adjective} ${noun}", I say, "Don't ${verb} anymore!"`);
  console.log(`My ${noun} ${adverb} stops.`);

  let repeat = READLINE.question('Would you like to play again? (y or n)').toLowerCase()[0];
  if (repeat !== 'y') {
    break;
  }
  console.clear();
}


/*
Problem:
-input
  -user input of noun, verb, adjective, adverb
-output
  -string story interpolating user responses
-implicit
  -readline sync
  -data validation
  -appropriate tenses, S-V agreement, a/an etc...

Example:
-see above
-walk vs walks
-capitalization?

Datatypes:
-input string
-output string
-internal string

Algorithm:
-require readline sync
-given a bunch of user inputs
-validate inputs and convert to lower case
-console.log them into the sentence
-then work on edge cases

Story:

My adjective noun was verbing adverbly around the room.
I told my noun to stop, but it's hard to stop a/an adjective noun from verbing.
"You adjective noun", I said, "Don't verb anymore!"
Eventually my noun adverbly stopped.
*/