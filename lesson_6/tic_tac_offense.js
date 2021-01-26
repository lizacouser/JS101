/*
The defensive-minded AI is pretty cool, but it's
still not performing as well as possible. If there
are no impending threats, it will pick a square at
random. We can improve it by attempting to find a
winning move. We're not going to add a complicated
algorithm; instead, we'll piggyback on
findAtRiskSquare and turn it into an attacking
mechanism as well. The logic is simple:

Finding a defensive-minded square means finding an
empty square in a line where the other two squares
belong to the human player.

Finding an offensive-minded square means finding an
empty square in a line where the other two squares
belong to the computer.

These two conditions are so similar that we can use
the same code to determine both results.
*/

/*
Problem:
-rules
  -find third move of my own!
*/


// eslint-disable-next-line max-lines-per-function
function getMove(board, moveType) {
  let marker;
  if (moveType === 'offensive') {
    marker = HUMAN_MARKER;
  } else if (moveType === 'defensive') {
    marker = COMPUTER_MARKER;
  }
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === marker &&
      board[sq2] === marker &&
      board[sq3] === ' '
    ) {
      return sq3;
    } else if (
      board[sq1] === ' ' &&
      board[sq2] === marker &&
      board[sq3] === marker
    ) {
      return sq1;
    } else if (
      board[sq1] === marker &&
      board[sq2] === ' ' &&
      board[sq3] === marker
    ) {
      return sq2;
    }
  }

  return null;
}