/*
Write a function that takes a floating point
number representing an angle between 0 and 360
degrees, and returns a string representing that
angle in degrees, minutes, and seconds.
You should use a degree symbol (˚) to represent
degrees,a single quote (') to represent minutes,
and a double quote (") to represent seconds.
There are 60 minutes in a degree, and 60 seconds
in a minute.

Examples:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Note: your results may differ slightly depending on
how you round values, but should generally be within
a second or two of the results shown.
*/

/*
Problem:
-input
  -float between 0 and 360
-output
  -string representing that angle in degrees, minutes, and seconds
-internal
  -60 min in a degree, 60 sec in a minute
  -round seconds to whole number
  -seconds and minutes should be two digits

Examples:
 -see above

Data types:
-input number
-output string
-internal numbers

Algorithm:
-given a floating point number between 0 and 360
-degrees = Math.floor(number)
-decimal = number - degrees
-minutes = Math.floor(decimal * 60)
-decimal = decimal - minutes
-seconds = (decimal * 60)
-return `${degrees}˚${minutes.toFixed(2)}'${seconds.toFixed(2)}"`
*/

const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(angle) {
  let degrees = Math.floor(angle);

  let remAngleInMins = (angle - degrees) * MINUTES_PER_DEGREE;

  let minutes = Math.floor(remAngleInMins);
  let seconds = Math.floor((remAngleInMins - minutes) * SECONDS_PER_MINUTE);

  // take care of numbers >360 or <0
  degrees %= 360;
  if (degrees < 0) {
    degrees += 360;
  }

  console.log(`${degrees}˚${padNum(minutes)}'${padNum(seconds)}"`);
}

function padNum(num) {
  return String(num).padStart(2, '0');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"