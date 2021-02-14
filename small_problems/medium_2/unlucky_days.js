/*
-input number representing year
-output number representing quantity of friday the 13ths
-rules
  -year is post 1752
  -what if year is in the future?

examples:
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

data:
-input number
-output number
-internal date objects

algorithm:
-set unluckyCount to 0
-iterate through months of given year
  -create new date object on 13th of that month fo that year
  -if getDay === FRIDAY_INDEX, incremembt unluckyCount
*/

const FRIDAY_INDEX = 5;
const THIRTEENTH = 13;

function fridayThe13ths(fullYear) {
  let unluckyCount = 0;

  for (let monthIdx = 0; monthIdx < 12; monthIdx += 1) {
    let thirteenth = new Date(fullYear, monthIdx, THIRTEENTH);

    if (thirteenth.getDay() === FRIDAY_INDEX) {
      unluckyCount += 1;
    }
  }

  return unluckyCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2