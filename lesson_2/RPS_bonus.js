/*
Bonus:
1) Lizard Spock
2) Shortened input
3) Best of 5
*/

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATIONS = {
  r : 'rock',
  p : 'paper',
  sc : 'scissors',
  l : 'lizard',
  sp : 'spock',
};

const LOSING_OPPONENTS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper'],
};


let gameScores = {
  user: 0,
  computer: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function convertFromAbbrev(choice) {
  if (Object.keys(ABBREVIATIONS).includes(choice)) {
    choice = ABBREVIATIONS[choice];
  }
  return choice;
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = convertFromAbbrev(readline.question().toLowerCase());

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice");
    userChoice = convertFromAbbrev(readline.question().toLowerCase());
  }
  return userChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function getWinner(choice, computerChoice) {
  if (LOSING_OPPONENTS[choice].includes(computerChoice)) {
    return 'user';
  } else if (LOSING_OPPONENTS[computerChoice].includes(choice)) {
    return 'computer';
  } else {
    return "tie";
  }
}

function logResults(choice, computerChoice, winner) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  switch (winner) {
    case 'user':
      prompt('You win!');
      break;
    case 'computer':
      prompt('The computer wins!');
      break;
    default:
      prompt("It's a tie!");
      break;
  }

  prompt(`The score is ${gameScores['user']} to ${gameScores['computer']}.`);
}

function askToRepeat() {
  prompt('Ready to start your next game (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}


while (gameScores['user'] < 3 && gameScores['computer'] < 3) {
  let choice = getUserChoice();
  let computerChoice = getComputerChoice();

  let winner = getWinner(choice, computerChoice);
  gameScores[winner] += 1;

  logResults(choice, computerChoice, winner);

  if (gameScores['user'] === 3) {
    prompt(`Amazing job! You are the grand winner!`);
    break;
  } else if (gameScores['computer'] === 3) {
    prompt(`The computer wins it all! Better luck next time.`);
    break;
  }

  if (askToRepeat()[0] !== 'y') break;
  console.clear();
}


/*
Lizard Spock

Rules:
-Normal
  -Scissors > paper
  -Paper > rock
  -Rock > scissors
-Added
  -Spock > Scissors
  -Scissors > Lizard
  -Lizard > Spock
  -Spock > Rock
  -Rock > Lizard
  -Lizard > Paper
  -Paper > Spock

-Plan
  -add valid choices
  -write out above logic
  -turn logic into object
*/

/*
Shortened choices:
-valid inputs include r, p, sc, l, sp
-options:
  -make an object that translates to abbreviation? to validate it
  has to be in either the array or the object translation?
*/

/*
Best of 5
-make variable to track my wins and computer's wins
-loop until someone wins 3
*/