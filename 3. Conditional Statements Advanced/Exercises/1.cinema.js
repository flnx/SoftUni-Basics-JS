// cinema

function cinema(input) {
  let projection = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);

  let price = 0.0;

  switch (projection) {
    case 'Premiere':
      price = 12;
      break;
    case 'Normal':
      price = 7.5;
      break;
    case 'Discount':
      price = 5;
      break;
  }

  let endPrice = rows * columns * price;
  console.log(endPrice.toFixed(2));
}

cinema(['Discount', '12', '30']);

// output 1800.00