// Practice Problem 14
// Given the following data structure write some code to return
// an array containing the colors of the fruits and the sizes of
// the vegetables.The sizes should be uppercase, and the colors
// should be capitalized.
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
// The return value should look like this:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

let answer = [];
Object.keys(obj).forEach(produceKey => {  // it actually makes more sense iterate through values here
  if (obj[produceKey].type === 'fruit') {
    answer.push(obj[produceKey].colors.map(capitalize));
  } else {
    answer.push(obj[produceKey].size.toUpperCase());
  }
});
console.log(answer);