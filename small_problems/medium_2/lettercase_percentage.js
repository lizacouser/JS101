/*
Problem:
-input string
-output object {
  -string percentage lowercase
  -string percentage uppercase
  -string percentage neither
-rules
  -assume no empty strings
  -percentages are strings in format '10:00'
  -percentages are rounded to nearest hundredth place
-return or print?

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data:
-input string
-output object
-internal
  -strings iterated by char
  -or array of chars? <-
  -percentages are strings

Algorithm:
-split string into array of chars
-get length of array filtered by lowercase
  -divide by array length
  -multiply by 100
-get length of array filtered by uppercase
-get length of the rest
-store into object percentages and return
*/

function letterPercentages(string) {
  let percents = {};
  let cases = ['lowercase', 'uppercase', 'neither'];

  let chars = string.split('');

  let totalCount = chars.length;

  cases.forEach(searchCase => {
    percents[searchCase] = getPercent(getCount(chars, searchCase), totalCount);
  });

  return percents;
}


function getPercent(number, total) {
  return ((number / total) * 100).toFixed(2);
}

function getCount(charArray, searchCase) {
  return charArray.filter(char => checkForCase(char, searchCase)).length;
}

function checkForCase(char, searchCase) {
  switch (searchCase) {
    case 'uppercase':
      return char !== char.toLowerCase();
    case 'lowercase':
      return char !== char.toUpperCase();
    default:
      return char === char.toLowerCase() && char === char.toUpperCase();
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


//using regex

function letterPercentages2(string) {
  let percents = {};
  let cases = ['lowercase', 'uppercase', 'neither'];

  let totalCount = string.length;

  cases.forEach(searchCase => {
    percents[searchCase] = getPercent(getCount2(string, searchCase), totalCount);
  });

  return percents;
}


function getCount2(string, searchCase) {
  switch (searchCase) {
    case 'uppercase':
      return string.search(/[A-Z]/g).length;
    case 'lowercase':
      return string.search(/[a-z]/gi).length;
    default:
      return string.search(/[^a-z]/gi).length;
  }
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
