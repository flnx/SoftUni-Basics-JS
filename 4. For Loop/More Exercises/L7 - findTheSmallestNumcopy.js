function solve(input) {
  let nums = Number(input[0]);
  let max = Number(input[1]);

  for (let i = 1; i < nums; i++) {
    let add = Number(input[i]);

    if (max < add) {
      max = add;
    }
  }
  console.log(max);
}
solve(['4', '24', '31', '4']);
