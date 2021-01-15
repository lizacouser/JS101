
// Practice Problem 5
// Consider the following nested object:
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};
// Compute and display the total age of the male members
// of the family.
// filter outer loop keys by people whose gender value is male
let munsterBoys = Object.keys(munsters).filter(name => {
  return munsters[name].gender === 'male';
}); // returns names of male munsters
let answer = munsterBoys.reduce((sum, name) => {
  return sum + munsters[name].age;
}, 0); // 444

console.log(answer);
/*
Suggested solutions:
let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});

or

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444
*/

