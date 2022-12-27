function solve(input) {
  let index = 0;
  let addSum = input[index];
  let totalSum = 0;

  while (addSum !== 'NoMoreMoney') {
    let numAsInput = Number(input[index]);
    index++;

    if (addSum < 0) {
      console.log('Invalid operation!');
      break;
    }
    console.log(`Increase: ${numAsInput.toFixed(2)}`);

    totalSum += numAsInput;
    addSum = input[index];
  }
  console.log(`Total: ${totalSum.toFixed(2)}`);
}

solve(['120', '45.55', '-150']);
