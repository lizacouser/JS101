/*
-input three numbers side lengths
-output string type of triangle
-rules:
 - equilateral => 3 equal side lengths
 - isos => two equal side lengths
 - scalene => 3 diff dside lengths
 - valid => sum of two shortest sides > longest
         => every side > 0

examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

-handle non-number input?

data types:
-input number
-output string
-internal
  -numbers

algorithm
- given three numbers
- make array of inputs and sort (a-b)

- if invalid triangle, return invalid
  - find two shortest sides
    -compare index0 + index1 to index2
    (- add and see if lengths are > third side)
  - make sure none fo teh number are 0
    -.every

- if three sides are the same return equilateral
  -1 === 2 && 2 === 3
- if two sides are the same return isosceles
  - 1 === 2 || 2 === 3
- otherwise return scalene

*/

function triangle(side1, side2, side3) {
  let [shortest, middle, longest] = [side1, side2, side3].sort((a, b) => a - b);

  if (invalidTriangle(shortest, middle, longest)) return 'invalid';

  if (shortest === longest) {
    return 'equilateral';
  }

  if (shortest === middle || middle === longest) return 'isosceles';

  return 'scalene';
}


function invalidTriangle(shortest, middle, longest) {
  return shortest <= 0 || shortest + middle <= longest;
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"