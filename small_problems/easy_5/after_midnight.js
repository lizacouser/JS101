/*
After Midnight (Part 1)
The time of day can be represented as the number
of minutes before or after midnight. If the number
of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is
before midnight.

Write a function that takes a time using this
minute-based format and returns the time of day
in 24 hour format (hh:mm). Your method should
work with any integer input.

***You may not use javascript's Date class methods.***

Examples:
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
The tests above should log true.

Disregard Daylight Savings and Standard Time & other complications.
*/

/*
P:
-input +- int representing minutes before or after midnight
-output time of day 'hh:mm'

E:
see above

D:
-input number
-output string
-internal numbers and strings

A:
-given an int representing minutes after midnight
-hours = int / 60 rounded down
-if hours is negative
  -add to 24
-minutes = int % 60 to get minutes
-if minutes is negative
  -add to 60
-convert to 'hh:mm' notation (helper function, pad start '0')

*/
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(minutesAfterMidnight) {
  while (Math.abs(minutesAfterMidnight) > MINUTES_PER_DAY) {
    minutesAfterMidnight %= MINUTES_PER_DAY;
  }

  let hour = Math.floor(minutesAfterMidnight / MINUTES_PER_HOUR);
  if (hour < 0) {
    hour += HOURS_PER_DAY;
  } // i could consolidate these negatives when deaoing with minutesAfterMidnight at top

  let minute = minutesAfterMidnight % MINUTES_PER_HOUR;
  if (minute < 0) {
    minute += MINUTES_PER_HOUR;
  }

  return getTimeString(hour, minute);
}

function getTimeString(hour, minute) {
  hour = String(hour).padStart(2, '0');
  minute = String(minute).padStart(2, '0');
  return hour + ':' + minute;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

/*
After Midnight (Part 2)
Write two functions that each take a time of day in 24 hour
format, and return the number of minutes before and after
midnight, respectively. Both functions should return a value
in the range 0..1439.

You may not use javascript's Date class methods.

Examples:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
The tests above should log true.

Disregard Daylight Savings and Standard Time and other irregularities.
*/

/*
NOTE: 24:00 === 0 and 00:00 === 0
*/

function beforeMidnight(timeString) {
  let timeInMinutes = getMinutes(timeString);
  if (timeInMinutes % MINUTES_PER_DAY === 0) {
    return 0;
  }
  return MINUTES_PER_DAY - timeInMinutes;
}

function afterMidnight(timeString) {
  let timeInMinutes = getMinutes(timeString);
  return timeInMinutes % MINUTES_PER_DAY;
}

function getMinutes(timeString) {
  let splitTime = timeString.split(':');
  let hours = Number(splitTime[0]);
  let minutes = Number(splitTime[1]);

  return (hours * MINUTES_PER_HOUR) + minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0); // edge case
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);  // edge case
console.log(beforeMidnight("24:00") === 0);

/*
LS SOLUTION
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
*/