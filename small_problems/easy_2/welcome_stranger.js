/*
Create a function that takes 2 arguments,
an array and an object. The array will
contain 2 or more elements that, when
combined with adjoining spaces, will
produce a person's name. The object will
contain two keys, "title" and "occupation",
and the appropriate values.

Your function should return a greeting that
uses the person's full name, and mentions
the person's title.

Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
*/


//name abstractions
function isValidName(nameArray) {
  let isValid = true;
  if (nameArray.length < 1) {
    isValid = false;
  }
  nameArray.forEach(name => {
    if (typeof name !== 'string' || name.trim() === '') {
      isValid = false;
    }
  });
  return isValid;
}

function titleCaps(nameArray) {
  let capitalizedNames = nameArray.map(name => {
    return name[0].toUpperCase() + name.slice(1);
  });
  return capitalizedNames;
}

function getFullName(nameArray) {
  let name = 'Stranger';
  if (isValidName(nameArray)) {
    name = titleCaps(nameArray).join(' ');
  }
  return name;
}

//title abstractions
function isValidTitle(titleObject) {
  let isValid = true;
  let keys = Object.keys(titleObject);
  if (keys.length < 1) {
    isValid = false;
  }
  keys.forEach(key => {
    if (typeof titleObject[key] !== 'string' || titleObject[key].trim() === '') {
      isValid = false;
    }
  });
  return isValid;
}

function getFullTitle(titleObject) {
  let title = 'cool person';
  if (isValidTitle(titleObject)) {
    title = titleObject.title + ' ' + titleObject.occupation;
  }
  return title;
}

//function
function greetings(nameArray = ['stranger'], titleAndOcc = {title : 'cool', occupation: 'person'}) {
  let fullName = getFullName(nameArray);
  let fullTitle = getFullTitle(titleAndOcc);
  return `Hello, ${fullName}! Nice to have a ${fullTitle} around!`;
}

// name tests
console.log(greetings(['liza', 'couser'], { title: "Master", occupation: "Plumber"}));
console.log(greetings(['Liza', ' '], { title: "Master", occupation: "Plumber"}));
console.log(greetings([], { title: "Master", occupation: "Plumber"}));
console.log(greetings([2, 3], { title: "Master", occupation: "Plumber"}));

//title tests
console.log(greetings(['Liza', 'Couser']));
console.log(greetings(['Liza', 'Couser'], { title: "master", occupation: "plumber"}));
console.log(greetings(['Liza', 'Couser'], { title: 2, occupation: "plumber"}));
console.log(greetings(['Liza', 'Couser'], { }));
console.log(greetings(['Liza', 'Couser'], { title: "Master", occupation: " "}));

//both
console.log(greetings(['Liza', 'Couser'], { title: "Master", occupation: "Plumber"}));
console.log(greetings());
console.log(greetings([], {}));
console.log(greetings(["", ""], {title: '', occupation: ''}));


/*
Problem:
-input
  -array of 2+ elements that join to make name (first, middle?, last)
  -an object containing 2 keys "title" and "occupation"
-internal
  -joins name into string with spaces in between
  -gets values for the keys title and occupation
-output
  -greeting that uses full name and mentions their title/occupation

Examples:
-regular 3 names
> ["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }
> Hello, John Q Doe! Nice to have a Master Plumber around.

-regular 2 names
> ["John", "Doe"], { title: "Master", occupation: "Plumber" }
> Hello, John Doe! Nice to have a Master Plumber around.

-empty array name
> [], { title: "Master", occupation: "Plumber" }
> Hello, stranger! Nice to have a Master Plumber around.

-empty object
> ["John", "Q", "Doe"], {title: "", occupation: ""}
> Hello, John Q Doe! Nice to have a cool person around.

-wrong types?
> [2, 3], { title: 2, occupation: 3 }
> Hello, Stranger! Nice to have you around.

-lower case
> ["john", "q", "doe"], { title: "Master", occupation: "Plumber" }
> Hello, John Q Doe! Nice to have a Master Plumber around.

Datatypes:
-input
  -array
  -object
-output
  -string
-internal
  -array.join()
  -string interpolation

Algorithm:
-given an array of names and an object containing title and occupation
-validate name, otherwise return default "stranger"
-capitalize first letter of names
-join capitalized names and save to variable fullName
-validate title and occupation?
-get title from object and save to variable title
-get occupation from object and save to variable title
-if empty string, use default

*/