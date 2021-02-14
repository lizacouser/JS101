/*
Problem:
-input number represneting three angles of triangle
-output string representing triangle's classificaton
-rules
  -right has a 90 degree angle
  -acute has all three angles less than 90
  -obtuse has one angle greater than 90
  -invalid
    -sum of all angles !== 180
    -angle <= 0
  -assume all angles have int values and are in degrees

Examples
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Data types:
-input number
-output string
-internal:
  -numbers

Algorithm:
-given three angles
-make and array containing all angles
-check if angles sum to 180 or if any angles are 0/null/NaN and return invalid
-if one of the angles is a right angle, return right
-if all angles are less than 90 return acture
-else return obtuse
*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (
    angles.reduce((acc, angle) => acc + angle) !== 180 ||
    angles.some(angle => angle <= 0)
  ) {
    return 'invalid';
  }

  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(60, 30, 90));       // "right"
console.log(triangle(120, 10, 50));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"