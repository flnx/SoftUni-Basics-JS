function solve(input) {
  let num = Number(input[0]);
  let count = 1;

  while (count <= num) {
    console.log(count);
    count = 2 * count + 1;
  }
}

solve(['31']);
