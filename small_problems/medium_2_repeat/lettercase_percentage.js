/*
-input string
-output object
-rules:
  -object contains: % lowercase, % uppercase, % neither
  -string always contains 1 character
  -whitespace counts as neither
  -object values are strings, fixed to 2 decimals


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages('a');
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }


data types:
-input string
-output object
-internal
  -array of chars, iteration methods => filter
  -string + iterate by index

algorithm:
# given a non-empty string
create an empty object
split string into array of characters ""
filter array for lowercase characters (char !== char.toUpperCase())
store length/100.toFixed(2) into obj.lowercase
filter array for uppercase characters (char !== char.toLowerCase())
store length/100.toFixed(2) into obj.uppercase
store (100 - Number(obj.lowercase) - Number(obj.uppercase)).toFixed(2) into obj.neither

return obj

*/

function letterPercentages(string) {
  let percents = {};

  let array = string.split("");
  let lowerCount = array.filter(char => char !== char.toUpperCase()).length;
  let upperCount = array.filter(char => char !== char.toUpperCase()).length;
  let neither = string.length - upperCount - lowerCount;

  percents.lowercase = getPercent(lowerCount, string.length);
  percents.uppercase = getPercent(upperCount, string.length);
  percents.neither = getPercent(neither, string.length);


  return percents;
}

function getPercent(number, total) {
  return (number / total * 100).toFixed(2);
}

function letterPercentages3(string) {
  let percents = {};

  let lowerCount = string.match(/[a-z]/g) || [];
  let upperCount = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^A-Z]/gi) || [];

  percents.lowercase = getPercent(lowerCount.length, string.length);
  percents.uppercase = getPercent(upperCount.length, string.length);
  percents.neither = getPercent(neither.length, string.length);


  return percents;
}


console.log(letterPercentages3('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages3('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages3('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
