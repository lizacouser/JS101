/*
Write a function that determines the mean
(average) of the three scores passed to it,
and returns the letter associated with
that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100.
There is no need to check for negative
values or values greater than 100.

Examples:
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
*/

function getGrade(score1, score2, score3) {
  const NUM_SCORES = 3;
  let meanScore = (score1 + score2 + score3) / NUM_SCORES;

  if (90 <= meanScore && meanScore <= 100) {
    return 'A';
  } else if (80 <= meanScore && meanScore < 90) {
    return 'B';
  } else if (70 <= meanScore && meanScore < 80) {
    return 'C';
  } else if (60 <= meanScore && meanScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

/*
Problem:
-input
  -three numbers
-output
  -string letter grade associated with average of 3 numbers
-implicit
  -90-100 (inclusive)= 'A' etc.
  -mean is sumScores / numScores

Examples:
-see above

Datatypes:
-input numbers
-output string
-internal numbers, if-else statements

Algorithm:
-given three numbers
-set constant numScores to 3
-set sumScores to score1 + score2 + score3
-set mean to sumScores/numScores
-if 90 <= mean <=100, return 'A'
-else if 80 <= mean < 90, return 'B'
-else if 70 <= mean < 90, return 'C', etc

*/
