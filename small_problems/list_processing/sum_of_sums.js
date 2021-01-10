/*
Problem:
-input array of numbers
-output sum of each leading subsequence
-rules
  -array always contains at least 1 number
  -leading subsequences of [1, 2, 3] are [1], [1, 2], and [1, 2, 3]
-questions
  -all integers?
  -mutate array?

Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Data types:
-input array, numbers
-output numbers
-internal array + array methods

Algorithm:
-given an array of numbers
-get nested array of all leading subsequences
  -set subsequences to []
  -while index < array.length
    -push array.slice(0, index + 1) to subsequences
-for each nested array
  -reduce to find sum and map to array of sums
-reduce array of sums

** you can do all this in fewer steps
-when you get all subsequences, sum them
-compress into one function
*/

function sumOfSums(numArray) {
  let subsequenceList = subsequences(numArray);
  let subsequenceSums = subsequenceList.map(subsequence => {
    return subsequence.reduce((sum, num) => sum + num, 0);
  });
  return subsequenceSums.reduce((sum, num) => sum + num, 0);
}

function subsequences(array) {
  let subsequences = [];
  for (let endIndex = 1; endIndex <= array.length; endIndex += 1) {
    subsequences.push(array.slice(0, endIndex));
  }
  return subsequences;
}

// more compressed
function sumOfSums2(numArray) {
  let subsequenceSums = [];
  for (let endIndex = 1; endIndex <= numArray.length; endIndex += 1) {
    subsequenceSums.push(numArray.slice(0, endIndex)
      .reduce((sum, num) => sum + num, 0));
  }
  return subsequenceSums.reduce((sum, num) => sum + num, 0);
}

sumOfSums2([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums2([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums2([4]);              // 4
sumOfSums2([1, 2, 3, 4, 5]);  // 35

// a more elegant way of doing what i did
function sumOfSums3(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}

