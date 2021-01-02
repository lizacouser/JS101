function average(arrayOfInts) {
  let count = arrayOfInts.length;
  let sum = arrayOfInts.reduce((sum, int) => sum + int);
  console.log(Math.floor(sum / count));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

function average2(arrayOfInts) {
  let count = arrayOfInts.length;
  let sum = 0;
  arrayOfInts.forEach(int => {
    sum += int;
  });
  console.log(Math.floor(sum / count));
}

average2([1, 5, 87, 45, 8, 8]);       // 25
average2([9, 47, 23, 95, 16, 52]);    // 40