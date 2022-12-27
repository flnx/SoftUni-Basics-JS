function solve(input) {
  let mainNum = Number(input[0]);
  let index = 1;
  let nums = Number(input[index]);
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (nums > max) {
    nums = Number(input[index]);

    if (sum >= mainNum) {
      break;
    }

    sum += nums;
    index++;
  }
  console.log(sum);
}

solve(['100', '10', '20', '30', '40']);
