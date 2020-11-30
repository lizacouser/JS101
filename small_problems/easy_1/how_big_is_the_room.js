
/*

Build a program that asks the user
to enter the length and width of a room in meters,
and then logs the area of the room to the console
in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time.
Use the readlineSync.prompt method to collect user input.

*/

let rlSync = require('readline-sync');
const SQ_M_TO_SQ_FT = 10.7639;

let lengthInM = Number(rlSync.question('Enter the length of the room in meters:'));
let widthInM = Number(rlSync.question('Enter the width of the room in meters:'));


//with more abstration
let calculateArea = (length, width) => length * width;
let convertToSqFt = (areaInMeters) => areaInMeters * SQ_M_TO_SQ_FT;

let getYourArea = () => {
  let areaInSqMeters = calculateArea(lengthInM, widthInM);
  let areaInSqFt = convertToSqFt(areaInSqMeters);
  console.log(`The area of the room is ${areaInSqMeters} square meters (${areaInSqFt} square feet).`);
};

getYourArea();

//with less abstraction:
let areaInSqMeters = lengthInM * widthInM;
let areaInSqFt = areaInSqMeters * SQ_M_TO_SQ_FT;

console.log(`The area of the room is ${areaInSqMeters} square meters (${areaInSqFt} square feet).`);

//NOTE: I could use Number.prototype.toFixed(2) to truncate after 2 decimal pl


/*

Problem:
-input:
  -rl-sync length in meters -> string (convert to number)
  -rl-sync width in meters -> string (convert to number) (no data validation)
-output:
  -string stating area of room in sq meters and
  area of room in sq ft
-rules:
  - area = length * width
  - 1 sq meter == 10.7639 sq ft

Example:

"Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet)."

Test Cases:
-user input negative  // NaN
-user input decimal   // should still work
-user input words     // NaN

Data:
-input string, convert to number
-output string
-internal logic: numbers

Algorithm:
require readline sync
get input length and convert to number
get input width and convert to number
calculate area given width and length
convert area to square feet
print area in square meters and square feet

START
SET constant rlSync = require('readline-sync')
SET constant sqMetersToSqFt = 10.7639
SET lengthInMeters = GET user input and convert to number
  -readline-sync.question()
SET widthInMeters = GET user input and convert to number
SET areaInSqMeters = lengthInMeters * widthInMeters
SET areaInSqFt = areaInSqMeters * sqMetersToSqFt
PRINT `The area of the room is ${areaInSqMeters} sq m (${areaInSqFt} sq ft).`
END

...

Modify the program so that it asks the user for the input type
(meters or feet). Compute for the area accordingly,
and log it and its conversion in parentheses.


let length = Number(rlSync.question('Enter the length of the room in meters:'));
let width = Number(rlSync.question('Enter the width of the room in meters:'));
let units = rlSync.question('Is that in Feet or Meters?');

let area = length * width;
let areaInSqFt = area * SQ_M_TO_SQ_FT;
let areaInSqMeters = area / SQ_M_TO_SQ_FT;

if (units.toLowerCase() === 'feet' || units.toLowerCase() === 'ft'){
  console.log(`The area of the room is ${area} square feet
               (${areaInSqMeters} square meters).`)
} else if (units.toLowerCase() === 'meters' || units.toLowerCase() === 'm'){
  console.log(`The area of the room is ${area} square meters
               (${areaInSqFt} square feet).`)
} else {
  console.log('Invalid input.')
}

*/