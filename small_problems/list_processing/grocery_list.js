/*
Problem:
-input nested array with string fruit and number quantity
-output flat array of fruits repeated quantity number of times
-questions
  -duplicates?
  -order?
  -mutate?

Example:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Data:
-input 2-D array of stings and numbers
-output array of strings
-internal arrays

Algorithm:
-Given an array of fruits and quantities
-initialize fruits  to []
-for each fruitData
  -set fruit to first element
  -set quantity to second element
  -for quantity number of times
    -fruitList.push(fruit)
-return fruitList

OR
-for each fruitData
  -get repeated fruits
  -concatenate to fruitlist
*/

function getFruits(fruitData) {
  let [fruit, quant] = fruitData;
  let fruits = [];
  while (quant > 0) {
    fruits.push(fruit);
    quant -= 1;
  }
  return fruits;
}

function buyFruit(fruitList) {
  return fruitList.map(getFruits).flat();
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
