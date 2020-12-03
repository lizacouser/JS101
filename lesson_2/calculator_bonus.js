
/*
Bonus features:
  1) Ask user for another calculation
    - Add a do-while loop that asks user if they want to continue
    - control for edge cases like capitalization or empty string
  2) Extract messages in the program to a configuration file
    - create js object in external file?
    - reference by key
    -need:
      -greeting, first number, second number, invalid number, operation prompt,
      invalid operation, try again prompt, invalid yes or no
  3) Internationalization
    - ask user for language ('en', 'es', or 'fr')
    - in messages json file, add language objects

*/


let rlSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt(MESSAGES.askLanguage);
let language = rlSync.question().toLowerCase();

while (!['en', 'es', 'fr'].includes(language)) {
  prompt(MESSAGES.invalidLanguage);
  language = rlSync.question();
}

prompt(MESSAGES[language].greeting);

let repeat;
do {

  prompt(MESSAGES[language].askForFirstNumber);
  let firstNumber = rlSync.question();

  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES[language].invalidNumber);
    firstNumber = rlSync.question();
  }

  prompt(MESSAGES[language].askForSecondNumber);
  let secondNumber = rlSync.question();

  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES[language].invalidNumber);
    secondNumber = rlSync.question();
  }

  prompt(MESSAGES[language].askForOperation);
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES[language].invalidOperation);
    operation = rlSync.question();
  }

  let result;
  switch (operation) {
    case '1' :
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '2' :
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case '3' :
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case '4' :
      result = Number(firstNumber) / Number(secondNumber);
      break;
  }

  if (!Number.isNaN(result) && result < Number.MAX_VALUE) {
    prompt(MESSAGES[language].resultAndRepeat.replace('RESULT', result));
  } else {
    prompt(MESSAGES[language].resultError);
  }
  repeat = rlSync.question();

  while (!['1', '2'].includes(repeat)) {
    prompt(MESSAGES[language].invalidYesOrNo);
    repeat = rlSync.question();
  }

} while (repeat === '1');

