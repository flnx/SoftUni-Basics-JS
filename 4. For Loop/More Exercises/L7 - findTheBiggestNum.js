function sumNumbers(input) {
  let n = Number(input[0]);
  let num = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < n; i++) {
    let currentNums = Number(input[i]);
    if (num < currentNums) {
      num = currentNums;
    }
  }

  console.log(num);
}
sumNumbers(['6', '5', '10', '15', '20', '30']);
