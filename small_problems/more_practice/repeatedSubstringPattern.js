/*
-input non-empty string
-output boolean if it consists of multiple repeated substrings
-rules
  -taking substring, and appending multiple copies of substring together
  -all lowercase english alphabet characters
  -abab //true
  -aba // flase
  -hellohellohello //true
  -abaababaababaab //true
  -aa //true


-data
  -input string
  -output boolean
  -internal
    -strings + substrings
    -arrays of chars
    -arrays of substrings

-split up string into all different length substrings (up to string.length / 2)
-if i split string in half, and test if it's repeated twice
-split sting into thirds, test if it's repeated three times
-split string into fourths, test if it's repeated 4 times...

-iterated through different arrangements (half, thirds, fourths, etc)
  -if string === splitSubstring.repeat(splitNumber), return true

-if substringLength is 1, splitnumber is stringLength/1
-if substringLength is 2, splitNumber is string.lengt/2
-if string.length % substringLength !== 0, continue


ALGORITHM:
-given a string
-iterate through substring lengths from 1 to string.length / 2
  - if string length % substring length !== 0, continue
  - set numberOfRepeats = stringlength / substringLength
  - set splitIndex = substringLength
  - set splitSubstring to string.slice(0, subStringLength)
  - if splitSubstring.repeat(numberOfrepeats) == string
      return true

-return false

*/

function repeatedSubstringPattern(testStr) {
  for (let subLength = 1; subLength <= (testStr.length / 2); subLength += 1) {
    if (testStr.length % subLength !== 0) continue;

    let numRepeats = testStr.length / subLength;
    let splitSubstring = testStr.slice(0, subLength);

    if (splitSubstring.repeat(numRepeats) === testStr) {
      return true;
    }
  }

  return false;
}

console.log(repeatedSubstringPattern('aba')); //false
console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('hellohellohello'));
console.log(repeatedSubstringPattern('abaababaababaab'));
console.log(repeatedSubstringPattern('aa'));