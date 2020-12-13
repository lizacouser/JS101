/*
Write a function that takes a year as input
and returns the century. The return value
should be a string that begins with the
century number, and ends with 'st', 'nd',
'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01.
So, the years 1901 - 2000 comprise the
20th century.

*/

const CENTURY_ENDING = {
  1 : 'st',
  2 : 'nd',
  3 : 'rd',
  4 : 'th',
  5 : 'th',
  6 : 'th',
  7 : 'th',
  8 : 'th',
  9 : 'th',
  0 : 'th'
};

const TEEN_ENDING = 'th';

function getCentury(year) {
  let century = Math.ceil(year / 100);
  return centuryToString(century);
}

function isTeen(centuryString) {
  return centuryString[centuryString.length - 2] === '1';
}

function centuryToString(century) {
  let centuryString = String(century);
  if (isTeen(centuryString)) {
    return centuryString + TEEN_ENDING;
  }
  let endNumber = centuryString[centuryString.length - 1];
  return centuryString + CENTURY_ENDING[endNumber];
  /*
  also works with switch case 1,2,3 and default!
  can also find last digit with % 10, and second to last with % 100
  */
}

console.log(getCentury(2000));        // "20th"
console.log(getCentury(2001));        // "21st"
console.log(getCentury(1965));        // "20th"
console.log(getCentury(256));         // "3rd"
console.log(getCentury(5));           // "1st"
console.log(getCentury(10103));       // "102nd"
console.log(getCentury(1052));        // "11th"
console.log(getCentury(1127));        // "12th"
console.log(getCentury(11201));       // "113th"



/*
Problem:
-input
  -year
-output
  -string of century
-implicit/rules
  -1st
  -2nd
  -3rd
  -4th-20th
  -21st
  -22nd
  -23rd
  -24th-30th

Examples:
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Datatypes:
-input
  -number
-output
  -string
-internal
  -number to get rid of last 2 digits (+ add 1?)
  -function to find ending (if else)
  -object to add ending? //nah

Algorithm:
1) function to get century
  -given a year
  -divide year by 100 and round up (Math.ceil)

2) Make object with endings for all the different numbers given an ending

3) function to convert to string
  -given a century
  -set centuryString to String(century)
  -set endNumber as centuryString[centuryString.length - 1]
  -return(endNumber + centuryEndings[endNumber])

*/

