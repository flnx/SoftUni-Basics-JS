function tradeComissions(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let comission = 0.0;

  let calcComission = sales / 100;
  let comissionOne = 0;
  let comissionTwo = 0;
  let comissionThree = 0;
  let comissionFour = 0;

  switch (city) {
    case 'Sofia':
      comissionOne = calcComission * 5.5;
      comissionTwo = calcComission * 7;
      comissionThree = calcComission * 8;
      comissionFour = calcComission * 12;
      break;
    case 'Varna':
      comissionOne = calcComission * 4.5;
      comissionTwo = calcComission * 7.5;
      comissionThree = calcComission * 10;
      comissionFour = calcComission * 13;
      break;
    case 'Plovdiv':
      comissionOne = calcComission * 5.5;
      comissionTwo = calcComission * 8;
      comissionThree = calcComission * 12;
      comissionFour = calcComission * 14.5;
      break;
  }

  if (sales > 0 && sales <= 500) {
    comission = comissionOne;
  } else if (sales > 500 && sales <= 1000) {
    comission = comissionTwo;
  } else if (sales > 1000 && sales <= 10000) {
    comission = comissionThree;
  } else if (sales > 10000) {
    comission = comissionFour;
  }

  if (comission > 0) {
    console.log(comission.toFixed(2));
  } else {
    console.log('error');
  }
}

tradeComissions(['Sofia', '1500']);
