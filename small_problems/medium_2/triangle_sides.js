/*
Problem
-input three numbers representing triangle side lengths
-output string representing type of triangle
-rules
  -equilateral has 3 equal sides
  -isoceles has two equal sides
  -scale has no equal sides
  -invalid triangles have
    -side length <= 0
    -two sides that sum to less than the length of third side
questions
  -return or print?
  -non-number input?
  -missing input?

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Data:
-input numbers
-output string
-internal
  -numbers, math

Algorithm:
-get three lengths
-check if invalid
-if all three sides equal each other, return equalateral
-if 2 sides equal each other, return isos
-otherwise return scalene

*/

function triangle(side1, side2, side3) {
  if (invalidTriangle(side1, side2, side3)) {
    return 'invalid';
  }

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function invalidTriangle(side1, side2, side3) {
  return (
    !side1 || !side2 || !side3 ||
    side1 + side2 < side3 ||
    side2 + side3 < side1 ||
    side3 + side1 < side2
  );
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 3));           // "invalid"


