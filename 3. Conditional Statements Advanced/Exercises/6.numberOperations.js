function numberOperations(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];

  let calc = 0.0;

  switch (operator) {
    case '+':
      calc = n1 + n2;
      if (calc % 2 === 0) {
        console.log(`${n1} + ${n2} = ${calc} - even`);
      } else {
        console.log(`${n1} + ${n2} = ${calc} - odd`);
      }
      break;

    case '-':
      calc = n1 - n2;
      if (calc % 2 === 0) {
        console.log(`${n1} - ${n2} = ${calc} - even`);
      } else {
        console.log(`${n1} - ${n2} = ${calc} - odd`);
      }
      break;

    case '*':
      calc = n1 * n2;
      if (calc % 2 === 0) {
        console.log(`${n1} * ${n2} = ${calc} - even`);
      } else {
        console.log(`${n1} * ${n2} = ${calc} - odd`);
      }
      break;

    case '/':
      calc = n1 / n2;
      if (n2 !== 0) {
        console.log(`${n1} / ${n2} = ${calc.toFixed(2)}`);
      } else {
        console.log(`Cannot divide ${n1} by zero`);
      }
      break;

    case '%':
      calc = n1 % n2;
      if (n2 !== 0) {
        console.log(`${n1} % ${n2} = ${calc}`);
      } else {
        console.log(`Cannot divide ${n1} by zero`);
      }
      break;
  }
}
numberOperations(['105', '2', '/']);
