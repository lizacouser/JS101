/*
How Many?
Write a function that counts the number of occurrences of
each element in a given array. Once counted, log each
element alongside the number of occurrences. Consider the
words case sensitive e.g. ("suv" !== "SUV").

Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences(array) {
  let counts = {};
  array.forEach(elem => {
    if (typeof elem === 'string') {
      elem = elem.toLowerCase();
    }
    if (counts[elem]) {
      counts[elem] += 1;
    } else {
      counts[elem] = 1;
    }
  });
  Object.keys(counts).forEach(elem => {
    console.log(`${elem} => ${counts[elem]}`);
  }); // I could break this into helper function logOccurrences()
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

/*
P:
-input array of elements, some repeated
-output strings denoting number of occurances of each element
-case sensitive

E:
-see above
-no repeats?
-empty?
-numbers?

Datatypes:
-input array
-output strings
-internal: object containing counts of each element!

A:
-given an array of elements
-make empty object count
-for each element in array
  -if (count[elem]) count[elem] += 1
  -else count[elem] = 1
-console.log(`${elem} => ${count[elem]})
*/
