/*
Javascript Mortgage Calculator
Liza Couser
*/

const READLINE = require('readline-sync');
let prompt = message => console.log('=> ' + message);

// Validate user input
let invalidPositiveNum = number => {
  return (number.trim() === '' || Number.isNaN(Number(number)) || Number(number) < 0);
};

// Remove unwanted symbols (commas from large numbers, % sign from percentages)
let removeSymbol = (string, symbol) => {
  if (string.includes(symbol)) {
    let regex = new RegExp(symbol, 'g');
    string = string.replace(regex, '');
  }
  return string;
};

// Get user input, validate and convert data
let getLoanAmount = () => {
  prompt('What is your loan amount in USD?');
  let loan = removeSymbol(READLINE.question('$'), ',');

  while (invalidPositiveNum(loan)) {
    prompt('Invalid loan amount. Try again with a number zero or greater.');
    loan = removeSymbol(READLINE.question('$'), ',');
  }
  return Number(loan);
};

let getMonthlyInterestRate = () => {
  prompt('What percent is your APR (annual percentage rate)?');
  let apr = removeSymbol(READLINE.question(), '%');

  while (invalidPositiveNum(apr)) {
    prompt('Invalid percentage rate. Try again with a number zero or greater.');
    apr = removeSymbol(READLINE.question(), '%');
  }
  let monthlyRate = (Number(apr) / 100) / 12;
  return monthlyRate;
};

let getDurationInMonths = () => {
  prompt('What is the duration of your mortgage (in years)?');
  let durationInYrs = READLINE.question();

  while (invalidPositiveNum(durationInYrs) || Number(durationInYrs) < 1) {
    prompt('Invalid duration. Must be a number greater than 1.');
    durationInYrs = READLINE.question();
  }
  let durationInMos = Number(durationInYrs) * 12;
  return durationInMos;
};

let askToRepeat = () => {
  prompt('Would you like to calculate another monthly payment rate? (y or n)');
  let answer = READLINE.question().toLowerCase();

  while (answer.trim() !== 'y' && answer.trim() !== 'n') {
    prompt('Answer must be y or n. Try again.');
    answer = READLINE.question().toLowerCase();
  }
  return answer;
};


// Mortgage Calculator
let calculateMortgage = () => {
  prompt('Let\'s calculate your mortgage!');

  let repeat;
  do {
    let loanAmount = getLoanAmount();
    let monthlyInterest = getMonthlyInterestRate();
    let durationInMos = getDurationInMonths();

    let monthlyPayment;
    if (monthlyInterest !== 0) {
      monthlyPayment = loanAmount * (monthlyInterest /
                       (1 - Math.pow((1 + monthlyInterest), (-durationInMos))));
    } else {
      monthlyPayment = loanAmount / durationInMos;
    }

    console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}.`);

    repeat = askToRepeat();
  } while (repeat === 'y');
};

calculateMortgage();


/*
NOTES

Problem:
-input ask user for
  -loan amount
  -Annual percentage Rate
  -loan duration in years
-output
  -monthly payment
-internal
  -convert APR to monthly interest rate
  -convert loan duration in years to months
  -convert number to %
  -do while loop for repeating calculator
  -monthly payment should be rounded out to two decimal places


Examples:
$100,000, 6%, 10 years    // $1,110.21 per month
$50,000, 4% , 8 years     // $609.46 per month
$50,000, 4%, 8.5 years    // $579.05 per month
$250,000, 0%, 15 years    // $1,388.89 per month
$250,000,000, 6.5%, 15 years  // $2,177,768.41 per month
$250,000, 6.5%, 1.5 years   // $14,614.53
$250,000, 6.5%, 0 years   // "please provide a positive loan term value"
$0, 6.5%, 15 years        // $0
-control for bad user input
  -empty strings
  -number < 0
  -non numbers
  -loan term less than 1
  -large number typed with a comma
  -percent typed with a %

Data types:
-input strings (convert to numbers)
-output string `Your monthly payment is $${monthlyPayment}.`
-internal
  -numbers

Algorithm:
-enable readline sync
-prompt loan amount
  -remove commas
  -save to loanAmount
  -validate
-prompt APR as %
  -save to APR
  -validate
-prompt loan duration in years
  -coerce to number and save to durationInYears
  -validate
-find monthly interest rate and save to monthlyInterest
  -divide by 12
-find loan duration in months and save to durationInMonths
  -multiply by 12
-calculate monthly rate
  -let m = p * (j / (1 - Math.pow((1 + j), (-n))));
-log rate to console as a string
*/