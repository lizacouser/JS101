/*
Reversed Arrays
Write a function that takes an Array as an argument,
and reverses its elements in place; that is, mutate
the Array passed into this method. The return value
should be the same Array object.

You may not use Array.prototype.reverse().

Examples:
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
*/

/*
P:
-input array
-output reversed array
-rules: return value should be same array object

E:
-see above

D:
-input array
-output array

A:
-3 and 0 flip
-2 and 1 flip

-save last [1,2,3,4,5]
-0 becomes last [1,2,3,4,1]
-1 becomes last - 1
-2 becomes last - 2
-3 becomes last - 3
-4 becomes last - 4
-last becomes first
*/

function reverse(list) {
  for (let idx = 0; idx < (list.length / 2); idx += 1) {
    let first = list[idx]; // [1,2,3,4]
    list[idx] = list[list.length - 1 - idx]; // [4,2,3,1]
    list[list.length - 1 - idx] = first;
  }
  return list;
}

// You can also swap two at a time by saying
// [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];



let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true