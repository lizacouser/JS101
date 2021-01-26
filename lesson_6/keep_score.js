/*
Keep track of how many times the player and computer each win,
and report the scores after each game. The first player to win
5 games wins the overall match (a series of 2 or more games).
The score should reset to 0 for each player when beginning a
new match. Don't use any global variables. However, you may
want to use a global constant to represent the number of games
needed to win the match.


Problem:
-input object containing player wins and losses
-output string representation of score
-internal
  -every time someone wins, increment score in object
  -once the user or computer have won 5 games, they win the match!
  -at the end of a match, scores reset

Steps:
-create object containing wins for player and for computer
-create a function to get score and log that at the top of each game
-after every game, check to see if someone has won the match
-if someone has won the match
  -log who won!
  -ask to play another match
  -if play another match
    - reset scores to 0 and loop to beginning
  -else prompt 'ready to play again?'
*/

const GAMES_TO_WIN_MATCH = 5;

function initializeMatch() {
  let scores = {};

  scores['player'] = 0;
  scores['computer'] = 0;
  scores['gameCount'] = 1;

  return scores;
}


function getMatchWinner(scores) {
  if (scores.player === GAMES_TO_WIN_MATCH) {
    return 'Player';
  } else if (scores.computer === GAMES_TO_WIN_MATCH) {
    return 'Computer';
  } else {
    return null;
  }
}

function isMatchWinner(scores) {
  return !!getMatchWinner(scores);
}

function winOrWins(winner) {
  return 'aieou'.includes(winner[winner.length - 1]) ? 'win' : 'wins';
}