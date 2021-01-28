/* eslint-disable max-lines-per-function */

const READLINE = require('readline-sync');

const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN_MATCH = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
const FIRST_PLAYER = 'choose';

// Log prompts
function prompt(message) {
  console.log(`=> ${message}`);
}

// Initialize score tracker
function initializeMatch() {
  let scores = {};

  scores['player'] = 0;
  scores['computer'] = 0;
  scores['gameCount'] = 1;

  return scores;
}

// Initialize game board
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = EMPTY_MARKER;
  }

  return board;
}

// Determine who makes the first move
function getFirstPlayer() {
  let choice;

  if (FIRST_PLAYER === 'choose') {
    prompt('Who goes first, Player or Computer?');
    choice = READLINE.question().toLowerCase();

    while (!['p', 'c', 'player', 'computer'].includes(choice)) {
      prompt('Must be player or computer. Try again:');
      choice = READLINE.question().toLowerCase();
    }
  }

  if (FIRST_PLAYER === 'computer' || choice[0] === 'c') {
    return 'computer';
  } else {
    return 'player';
  }
}

// Clear console and display tic tac toe board and markers
function displayBoard(board) {
  console.clear();

  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

// Log match score
function displayScores(scores) {
  prompt(`Game #${scores['gameCount']}. First one to win ${GAMES_TO_WIN_MATCH} games wins.`);
  prompt(`Player: ${scores.player}. Computer: ${scores.computer}.`);
}

// Make move based on the current player
function chooseSquare(board, currentPlayer) {
  return currentPlayer === 'player' ? playerChooseSquare(board) : computerChooseSquare(board);
}

// Prompt player to select move
function playerChooseSquare(board) {
  prompt(`Choose a square (${joinOr(emptySquares(board))}): `);
  let square = READLINE.question().trim();
  // do I have to use trim here? it seems to trim either way...

  while (!emptySquares(board).includes(square)) {
    prompt('Invalid input. Try again: ');
    square = READLINE.question();
  }

  board[square] = HUMAN_MARKER;
}

// Returns string of elements in array connected by delimiter and conjunction
function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

// Return array of empty squares
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

// Computer move
function computerChooseSquare(board) {
  let square;

  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    square = getWinningMove(WINNING_LINES[line], board, 'offensive');
    if (square) break;
  }

  if (!square) {
    for (let line = 0; line < WINNING_LINES.length; line += 1) {
      square = getWinningMove(WINNING_LINES[line], board, 'defensive');
      if (square) break;
    }
  }

  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = '5';
    } else {
      square = generateRandomMove(board);
    }
  }
  board[square] = COMPUTER_MARKER;
}

// Return defensive or offensive move if one exists, null if not
function getWinningMove(winningLine, board, moveType) {
  let boardLine = winningLine.map(square => board[square]);
  let searchMarker;

  if (moveType === 'defensive') {
    searchMarker = HUMAN_MARKER;
  } else if (moveType === 'offensive') {
    searchMarker = COMPUTER_MARKER;
  }

  if (boardLine.filter(mark => mark === searchMarker).length === 2) {
    let emptySquare = winningLine.find(sq => board[sq] === EMPTY_MARKER);
    if (emptySquare) {
      return emptySquare;
    }
  }
  return null;
}

// Generate random square for computer move
function generateRandomMove(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

// Alternate the current player
function switchCurrentPlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

// Determine if someone won the game
function isWinner(board) {
  return !!getWinner(board); // null if no winner
}

// Determine who wins game, returning null if no one wins
function getWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

// Return boolean if there are no empty squares left
function boardFull(board) {
  return emptySquares(board).length === 0;
}

// Determine if someone has won 5 games
function isMatchWinner(scores) {
  return !!getMatchWinner(scores);
}

// Return 'player' or 'computer' when someone has won 5 games, null if not
function getMatchWinner(scores) {
  if (scores.player === GAMES_TO_WIN_MATCH) {
    return 'Player';
  } else if (scores.computer === GAMES_TO_WIN_MATCH) {
    return 'Computer';
  } else {
    return null;
  }
}

function playAgain(gameOrMatch) {
  if (gameOrMatch === 'game') {
    prompt("Want to keep playing? (y/n)");
  } else if (gameOrMatch === 'match') {
    prompt("Would you like to start a new match? (y/n)");
  }

  let playAgain = READLINE.question().toLowerCase();
  while (!['y', 'n', 'yes', 'no'].includes(playAgain)) {
    prompt('Invalid input. Try again:');
    playAgain = READLINE.question().toLowerCase();
  }

  return playAgain[0] === 'y';
}


// Game play loop
while (true) {
  let matchScore = initializeMatch();

  while (true) {
    let board = initializeBoard();
    let currentPlayer = getFirstPlayer();

    while (true) {
      displayBoard(board);
      displayScores(matchScore);

      chooseSquare(board, currentPlayer);
      currentPlayer = switchCurrentPlayer(currentPlayer);

      if (isWinner(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (isWinner(board)) {
      prompt(`${getWinner(board)} won!`);
      matchScore[getWinner(board).toLowerCase()] += 1;
    } else {
      prompt("It's a tie!");
    }

    displayScores(matchScore);
    matchScore.gameCount += 1;

    if (isMatchWinner(matchScore)) {
      prompt(`${getMatchWinner(matchScore)} wins the match!`.toUpperCase());
      break;
    }

    if (!playAgain('game')) break;
  }

  if (!playAgain('match')) break;
}

prompt('Thanks for playing Tic Tac Toe!');

