/*
Problem:
-input odd integer supplied as argument
-output log string of diamond in n x n grid
-argument will always be an odd integer
-rules
  - n = 1, 0 space 1 star
  - n = 3, 1 space + 1 star, 0 sapce 3 stars, 1 space + 1 star
  - n = 5, 2 space + 1 star, 1 space + 3 stars, 0 space 5 stars, etc.
  - each row printed on new line
  - max length of line is always n
  - log not return

Examples:
diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


Data:
-input number
-output is string logged to console
-internal
  -strings

Algorithm:
- given an odd integer n
- make a variable for the number of stars in row, starting at 1
- while row <= n
- initialize variable stars to '*'.repeat(number of stars)
- log stars but pad start with goal length ((n - numStars) / 2) + numStars
- if the row < (n/2) rounded up, then number of stars +2
- else numStars -= 2
- row += 1
*/


function diamond(numRows) {
  let numStars = 1;
  for (let row = 1; row <= numRows; row += 1) {
    let stars = '*'.repeat(numStars);
    let targetLength  = ((numRows - numStars) / 2) + numStars;
    console.log(stars.padStart(targetLength));
    if (row < Math.ceil((numRows / 2))) {
      numStars += 2;
    } else {
      numStars -= 2;
    }
  }
}

diamond(1);
diamond(3);
diamond(9);

// hollow diamond

function hollowDiamond(numRows) {
  let diamondWidth = 1;
  for (let row = 1; row <= numRows; row += 1) {
    let prependSpaces = ' '.repeat((numRows - diamondWidth) / 2);

    if (row === 1 || row === numRows) {
      console.log(prependSpaces + '*');
    } else {
      let numInternalSpaces = diamondWidth - 2;
      let internalSpaces = ' '.repeat(numInternalSpaces);
      console.log(prependSpaces + '*' + internalSpaces + '*');
    }

    if (row < Math.ceil((numRows / 2))) {
      diamondWidth += 2;
    } else {
      diamondWidth -= 2;
    }
  }
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);
