function solve(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let printNums = '';

  for (let i = firstNum; i <= secondNum; i++) {
    let currentNum = '' + i;
    let oddSum = 0;
    let evenSum = 0;

    for (let j = 0; j < currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));
      if (j % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }

    if (oddSum === evenSum) {
      printNums += `${i} `;
    }
  }
  console.log(printNums);
}

solve(['123456', '124000']);
