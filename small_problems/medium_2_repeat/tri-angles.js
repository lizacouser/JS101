/*
-input 3 angles, number
-output string type of triangle
-rules:
  -right => has 90 degree angle
  -acute => all three angles <90
  -obtuse => one angle greater than 90
  -invalid => sum !== 180, any angle <= 0

examples:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

data:
-input numbers
-output string
-internal
  - numbers

algorithm:
#given three angles
-make angle array
-check if valid triangle
  sum of angles !== 180
-if right, return right
-if acute, return acute
-if obtuse return obtuse
*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (!isValid(angles)) return 'invalid';

  if (angles.some(angle => angle === 90)) return 'right';

  if (angles.some(angle => angle > 90)) return 'obtuse';

  return 'acute';
}

function isValid(angleArray) {
  return angleArray.reduce((sum, current) => sum + current) === 180 &&
    angleArray.every(angle => angle > 0);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"