function range(start, end = -1) {
  let range = [];

  if (end === -1) { //can't do !end, because that would execute when end === 0
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));
