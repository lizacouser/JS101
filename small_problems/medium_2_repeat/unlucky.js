/*
-input year
-output number of firday the 13ths
-rules
  -gregorian

examples:
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

data:
-input number
-output number
-internal date object

algorithm:
given a full year
create variable unluckyCount = 0
iterate through months of the year
  make a new date for the 13th of each month
  if date.getDay() returns 5, add to uncluckyCount
return unluckyCount
*/

function fridayThe13ths(fullYear) {
  let unluckyCount = 0;

  for (let month = 0; month < 12; month += 1) {
    let thirteenth = new Date(fullYear, month, 13);

    unluckyCount = thirteenth.getDay() === 5 ? unluckyCount + 1 : unluckyCount;
  }

  return unluckyCount;
}


fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2