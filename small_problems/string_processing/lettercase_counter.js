/*
Problem:
-input string
-output object containing
  a) number of lowercase characters
  b) number of uppercase characters
  c) number of non-alphabet characters
-rules
  -white space counts as 'neither'
  -object should include '0' if there are none of any type

Example:
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

Data:
-input arting
-output object
-internal
  -array of chars? string ref by index

Algorithm:
-given a string
-create an object caseCount with lowercase, uppercase, and neither set to 0
-loop through character indexes starting with 0 and ending < string.length
  -if ABCDEFGHIJKLMNOPQRSTUVWXYZ includes character
    -caseCount.uppercase += 1
  -if abcedfghijklmnopqrstuvwxyz includes character
    -caseCount.lowercase += 1
  else caseCount.neither += 1
-return caseCount
*/

function letterCaseCount(string) {
  let caseCount = {lowercase: 0, uppercase: 0, neither: 0};

  for (let charIdx = 0; charIdx < string.length; charIdx += 1) {
    let currentChar = string[charIdx];
    if (!!currentChar.match(/[a-z]/)) {
      caseCount.lowercase += 1;
    } else if (!!currentChar.match(/[A-Z]/)) {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  }
  return caseCount;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


// another fun solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || []; // array of matches
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}