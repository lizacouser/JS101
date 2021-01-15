
// Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify
// items, even when some of those items were created on a
// different server or by a different application. That is,
// without any synchronization, two or more computer systems
// can create new items and label them with a UUID with no
// significant risk of stepping on each other's toes. It
// accomplishes this feat through massive randomization. The
// number of possible UUID values is approximately 3.4 X 10E38,
// which is a huge number. The chance of a conflict is vanishingly
// small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters(the digits
// 0 - 9 and the letters a - f) represented as a string.The
// value is typically broken into 5 sections in an
// 8 - 4 - 4 - 4 - 12 pattern,
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

/* Problem:
-input nothing
-output string with 32 randomly generated hexadecimal characters
-rules:
  -8-4-4-4-12 pattern
  -chars a-f and 0-9

Example: f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91

Data:
-array of hexadecimal chars to reference by index
-string output
-Number to randomly generate index

Algorithm:
-set 'hexadecimals' to string of all hexadecimals
-set 'UUID' to empty array
-for 32 iterations
  -generate random index between 0 and hexadecimals.length - 1
  -push hexadecimals[index] to UUID
-starting at index 20 and subtracting 4 each time until index === 8
  -splice '-' into UUID at index (replacing 0 elements) (20, 16, 12, and 8)
-return UUID.join('')
*/

function generateUUID() {
  let hexadecimals = 'abcdef0123456789';
  let UUID = [];
  for (let digit = 0; digit < 32; digit += 1) {
    let randomIndex = Math.floor(Math.random() * hexadecimals.length);
    UUID.push(hexadecimals[randomIndex]);
  }
  for (let index = 20; index >= 8; index -= 4) {
    UUID.splice(index, 0, '-');
  }
  return UUID.join('');
}

generateUUID();
generateUUID();
generateUUID();
generateUUID();
generateUUID();

/*
Proposed solution:
function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}
*/