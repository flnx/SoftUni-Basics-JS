function solve(input) {
  let index = 0;
  let nums = input[index];
  let max = Number.MIN_SAFE_INTEGER;

  while (nums !== 'Stop') {
    let counter = Number(input[index]);

    if (max < counter) {
      max = counter;
    }
    index++;
    nums = input[index];
  }

  console.log(max);
  console.log(nums);
}
solve(['45', '-20', '7', '99', 'Stop']);
