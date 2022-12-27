function solve(input) {
  let n = Number(input[0]);
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let y = 0; y <= n; y++) {
        if (i + j + y === n) {
          counter++;
        }
      }
    }
  }
  console.log(counter);
}

solve(['20']);
