/*
Find all pairs
You are given array of integers, your task will be to count all
pairs in that array and return their count.

Notes:
Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once.
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)


Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0

*/

/*
-input array of numbers
-output return number of pairs
-rules
  -if [] or one value, return 0
  -if multiple pairs, count each pair only once
  - mutate array or no?

data:
- input array
- output number
- internal
  - array

algorithm:
given array of numbers
if length is 1 or 0, return 0
make an empty object to store seen numbers {}
loop through array
- if ive not seen the element
  - create new property and set value to 0
- increment value in object by 1
Object.values
  filter if value >= 2
  map Math.floor(value/2) to figure out how many pairs
  sum the count of pairs
*/

function pairs(array) {
  if (array.length <= 1) return 0;

  let numberCount = {};

  for (let index = 0; index < array.length; index += 1) {
    let elem = array[index];
    if (!numberCount.hasOwnProperty(elem)) {
      numberCount[elem] = 0;
    }
    numberCount[elem] += 1;
  }

  return Object.values(numberCount)
    .reduce((acc, val) => acc + Math.floor(val / 2), 0);

}


console.log(pairs([1, 2, 5, 6, 5, 2]));
console.log(pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]));
console.log(pairs([0, 0, 0, 0, 0, 0, 0]));
console.log(pairs([1000, 1000]));
console.log(pairs([]));
console.log(pairs([54]));