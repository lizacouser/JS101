/*
Problem:
-input odd integer
-output log string of stars
-rules
  -input number must be greater than or equal to 7
  -3 stars per row until center row with n stars
  -with 7
    -row 1 // prepend space = 0, internal spaces = 2 (6/2 - 1)
    -row 2 // prepend space = 1, internal spaces = 1
    -row 3 // prepend space = 2, internal spaces = 0
  -with 9
    -row 1 // prepend space = 0, internal spaces = 3 (8/2 - 1)
    -row 2 // prepend space = 1, internal spaces = 2
    -row 3 // prepend space = 2, internal spaces = 1
    -row 4 // prepend space = 3, internal spaces = 0
  -with 11
    -row 1 // prepend space = 0, internal spaces = 4 (10/2 - 1)
    -row 2 // prepend space = 1, internal spaces = 3
    -row 3 // prepend space = 2, internal spaces = 2
    -row 4 // prepend space = 3, internal spaces = 1
    -row 5 // prepend space = 4, internal spaces = 0
  -number of rows = 11 -> (10 / 2) going down, 11 stars, (10/2 going up)

Examples:
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

DAta:
-input number
-output string
-internal
  -array of formations? [2, 1, 0, 0 , 0, 1, 2]
  -strings

Algorithm:
-given a number of rows
-iterate from 0 to numRows - 1
-set prependSpaces to iterator
-set internalSpaces to (numRows - 1)/2 - 1
-set middleRow to ((numRows - 1) / 2
-if (iterator === middleRow) print numRows stars
-print prependSpaces + * + internalSpaces + *
-if iterator < middleRow
  -prependSapces ++
  -internalSpaces --
-if iterator > middleRow
  -prependSapces --
  -internalSpaces ++

[2-0, 1-1, 0-2, 0-0, 0-2, 1-1, 2-0]
*/


function stars(numRows) {
  let pattern = getPattern(numRows);

  for (let row = 0; row < numRows; row += 1) {
    let middleRow = Math.floor(numRows / 2);
    let [prependedSpaces, internalSpaces] = pattern[row];

    if (row === middleRow) {
      console.log('*'.repeat(numRows));
    } else {
      console.log(' '.repeat(prependedSpaces) + '*' + ' '.repeat(internalSpaces) + '*' + ' '.repeat(internalSpaces) + '*');
    }
  }
}

function getPattern(numRows) {
  let pattern = [];
  let [prepended, internal] = [0, (numRows - 3) / 2];

  while (true) {
    pattern.push([prepended, internal]);
    prepended += 1;
    internal -= 1;

    if (prepended > (numRows - 3) / 2) {
      pattern = pattern.concat('middle row', [...pattern].reverse());
      break;
    }
  }
  return pattern;
}

stars(9);
stars(11);
stars(13);