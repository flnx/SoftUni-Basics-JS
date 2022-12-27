function divideByNine(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let sum = 0;
  let toString = '';

  for (let i = n1; i <= n2; i++) {
    if (i % 9 == 0) {
      sum += i;
      toString += `${i} \n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(toString);
  //
}
divideByNine(['100', '200']);
