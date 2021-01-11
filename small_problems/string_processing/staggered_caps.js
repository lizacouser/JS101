/*
PART 1
Problem:
-input string
-output string with staggered caps
-rules of staggered caps
  -first char and every other after that is capitalized
  -the rest lowercase or non-alphabetic
  -non-alphabetic unchanged
    -h-h-h = H-H-H etc

Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Data:
-input string
-output string
-internal strings w/ indexes or array

Algorithm:
-given a string
-make new empty string staggered
-for each char in string starting with index 0 while index < length of string
  if char[index].search(/^[A-Za-z]) === -1
    -staggered += char
  -else if index is even
    -staggered += char.toUpperCase()
  -else if index is odd
    -staggered += char.toLowerCase()
  -return staggered
*/

function staggeredCase(string) {
  let staggered = '';
  for (let charIdx = 0; charIdx < string.length; charIdx += 1) {
    let char = string[charIdx];
    if (charIdx % 2 === 0) {
      staggered += char.toUpperCase();
    } else {
      staggered += char.toLowerCase();
    }
  }
  return staggered;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// you could also do split, map, and join like before

/*
PART 2
Problem:
-modify function to ignore non-alphabetic chars
-not triggered by indexes, but by previous capitalization

Example:
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

Data:
-input string
-output string
-internal
  -array methods?
  -strings

Algorithm:
-make another variable letterIndex, that holds index with non-letters removed
-
*/

function staggeredCase(string) {
  let staggered = '';
  let justLetters = string.replace(/^[A-Za-z]/, '')
  let letterIdx = 0;
  let charIdx = 0;
  while (letterIdx < justLetters.length && charIdx < string.length) {
    let char = string[charIdx];
    if (char.search(/^[A-Za-z]/) === -1) {
      staggered += char;
    } else if (letterIdx % 2 === 0) {
      staggered += char.toUpperCase();
      letterIdx += 1;
    } else {
      staggered += char.toLowerCase();
      letterIdx += 1;
    }
    charIdx += 1;
  }
  return staggered;
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


// better solution
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(char => {
      char = char.toLowerCase();
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}


// plus modification
function staggeredCase(string, includeNonAlphabetic = true) {
  if (includeNonAlphabetic) {
    return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");

  } else {
    let needUpper = true;
    return string
      .split("")
      .map(char => {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
          if (needUpper) {
            needUpper = false;
            return char.toUpperCase();
          } else {
            needUpper = true;
            return char.toLowerCase();
          }
        } else {
          return char;
        }
      })
      .join("");
  }
}