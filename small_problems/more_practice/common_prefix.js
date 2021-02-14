/*
-input array of strings
-output string representing longest common prefix of strings
-rules
  -if no common prefix, return empty string
  -all lowercase
  -numbers/special characters/non-string input?
  -mutating string?

examples:
console.log(getCommonPrefix(['flower', 'flow', 'flight'])) //'fl'
console.log(getCommonPrefix(['dog', 'racecar', 'car'])) //''
console.log(getCommonPrefix(['hat', 'hatch', 'hate', 'hatred'])) //'hat'


datatypes
-input array of strings
-output string
-internal
  -arrays + strings

algorithm
-find all leading substrings of shortest word in array
-filter through substrings, callback returns true if every element in the array starts with substring
-return the longest element in filtered array

*/

function getCommonPrefix(arr) {
  let shortestString = getShortestElement(arr);
  let substrings = getLeadingSubstrings(shortestString);

  let commonPrefixes = substrings.filter(substring => {
    return arr.every(string => {
      return string.startsWith(substring);
    });
  });

  if (commonPrefixes.length === 0) return '';

  return getLongestElement(commonPrefixes);
}

function getShortestElement(arr) {
  return arr.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  });
}

function getLongestElement(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

function getLeadingSubstrings(str) {
  let substrings = [];
  for (let endIndex = 1; endIndex <= str.length; endIndex += 1) {
    substrings.push(str.slice(0, endIndex));
  }

  return substrings;
}

console.log(getCommonPrefix(['hi', 'hello'])); // h
console.log(getCommonPrefix(['flower', 'flow', 'flight'])); //'fl'
console.log(getCommonPrefix(['dog', 'racecar', 'car'])); //''
console.log(getCommonPrefix(['hat', 'hatch', 'hate', 'hatred'])); //'hat'
