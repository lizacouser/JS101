/*
The computer currently picks a square at random.
That's not very interesting. Let's make the computer
defensive-minded so that, when an immediate threat
exists, it will try to defend the 3rd square. An
immediate threat occurs when the human player has
2 squares in a row with the 3rd square unoccupied.
If there's no immediate threat, the computer can
pick a random square.
*/

/*
Problem:
-input a board of squares
-output a square number to block 3 squares in a row
-internal
  -if player_marker has a winning combination of 2,
  put computer marker on third part of winning combination

Example:
1: X
2: X
3: ' '
4: O
5: O
6: X
7: ' '
8: ' '
9: ' '

Plays O at square 3

Data types:
-input object, with string entries
-output string of key object where to make move
-internal nested array of solutions

Algorithm:
-get winning lines array
-for loop through winning lines array
  -let sq1, sq2, sq3 = winningLines[line]
  -if board[sq1] && board[sq2] === human
    -return sq3
  -else if board[sq2] && board[sq3] === human
    -return sq1
  -else if board[sq1] && board[sq3] === human
    -return sq2
-return random number

note to self:
-abstract winningLines array to separate function
*/

function getWinningLines() {
  return [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];
}

function getDefensiveMove(board) {
  let winningLines = getWinningLines();
  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER) {
      return sq3;
    } else if (board[sq2] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER) {
      return sq1;
    } else if (board[sq1] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER) {
      return sq2;
    }
  }

  return null;
}

/*
Proposed solution:

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === 'X').length === 2) {
    let unusedSquare = line.find(square => board[square] === ' ');
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}
*/

// current computer move
function computerChooseSquare(board) {
  let square;

  if (getDefensiveMove(board) !== null) {
    square = getDefensiveMove(board);

    board[square] = COMPUTER_MARKER;
  } else {
    square = generateRandomMove(board);

    board[square] = COMPUTER_MARKER;
  }
}

function generateRandomMove(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

/*

*** current get winner ***

function getWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];

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
*/