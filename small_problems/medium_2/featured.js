/*
-input integer
-output integer (next featured number greater than integer)
-rules
  -input does NOT have to be a featured number
  - what to do with negative input? are featured numbers always positive?
  -error message if there is no next featured number!
    -aka if input int >= 9876543201

-featured number
  -odd number (98 is not)
  -multiple of 7 (97 is not)
  -no repeat digits (133 is not)
  -examples: 49


examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

data:
-input number
-output number
-internal
  -numbers
  -maybe check for repeats by splitting into array of chars

algorithm:
-given a number
-if number is too big, return string error message
-set testNumber = number;
-while(true)
-increment testNumber
-if testNumber is a featured number
  -return testNumber

*/

const MAX_FEATURED_NUM = 9876543201;

function featured(num) {
  let testNumber = num;

  while (testNumber < MAX_FEATURED_NUM) {
    testNumber += 1;
    if (isFeaturedNumber(testNumber)) return testNumber;
  }
  return "There is no possible number that fulfills those requirements.";
}


function isFeaturedNumber(num) {
  return (
    num % 2 === 1 &&
    num % 7 === 0 &&
    !repeatsDigits(num)
  );
}

function repeatsDigits(num) {
  let numArray = num.toString().split('');

  for (let index1 = 0; index1 < numArray.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 < numArray.length; index2 += 1) {
      if (numArray[index1] === numArray[index2]) return true;
    }
  }

  return false;
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
