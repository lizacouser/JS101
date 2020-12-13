/*
Write a function that takes a positive integer,
n, as an argument, and logs a right triangle
whose sides each have n stars. The hypotenuse
of the triangle (the diagonal side in the images
below) should have one end at the lower-left
of the triangle, and the other end at the
upper-right.


Examples:
triangle(5);

    *
   **
  ***
 ****
*****

*/

function triangle(sideLength) {
  let rowNum = 0;

  sideLength = parseInt(sideLength, 10);
  if (Number.isNaN(sideLength)) {
    console.log('Invalid side length.');
  }

  while (rowNum <= sideLength) {
    console.log(' '.repeat(sideLength - rowNum) + '*'.repeat(rowNum));
    rowNum += 1;
  }
}

triangle(5);
triangle(9);
triangle(2.8);
triangle('1');
triangle('hello!');


/*
Problem:
-input number of stars on sides of triangle
-output
  -log a string with triangle of stars
  -one vertex at lower left, one upper right
  -height of n stars, width of n stars
-implicit
  -each row prints n - row spaces before the stars
  -only works with positive ints
  -line of white space between?

Examples:
see above
-edge cases include non-ints, 0, and NaN

Datatypes:
-input number
-output string
-internal loop

Algorithm:
-given a number of stars starLength
-set rowNumber to 0
-while (rowNum <= starLength)
  log ' '.repeat(starLength - rowNum) + '*'.repeat(rowNum))
  rowNum += 1;
}
*/