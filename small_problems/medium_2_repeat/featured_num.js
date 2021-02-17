/*
-input number
-output next featured number
-rules
  -featured number is divisible by 7, odd, and unique digits
  -error message if there is no next featured number
    (largest possible is 9876543201)


data:
-input number
-output number
-internal:
  -mostly number
  -number => string for digitcompare

algorithm:
given a number
find next odd number that's divisible by 7
  -for loop, increase number by 1 until divisible by 7
while (true)
compare digits --> if all unique, return nextOdd
  -turn digit to string
  -make seen digits array
  -if not seen add to arr
  -if seen return false
  -after loop return true
add 14 to nextOdd
*/

const MAX_FEATURED = 9876543201;
function featured(num) {
  if (num >= MAX_FEATURED) {
    return 'There is no possible number that fulfills those requirements.';
  }

  let nextOdd = nextOddMultipleOfSeven(num);

  while (true) {
    if (allUnique(nextOdd)) return nextOdd;
    nextOdd += 14;
  }

}

function nextOddMultipleOfSeven(num) {
  num = num % 2 === 0 ? num + 1 : num + 2;

  while (true) {
    if (num % 7 === 0) return num;
    num += 2;
  }
}

function allUnique(num) {
  let numString = String(num);
  let seen = [];

  for (let index = 0; index < numString.length; index += 1) {
    if (seen.includes(numString[index])) {
      return false;
    }
    seen.push(numString[index]);

  }
  return true;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."