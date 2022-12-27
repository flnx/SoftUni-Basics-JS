// Fruit Shop

function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);

  let price = 0.0;

  if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Wednesday' ||
    day === 'Thursday' ||
    day === 'Friday'
  ) {
    switch (fruit) {
      case 'banana':
        price = quantity * 2.5;
        console.log(price.toFixed(2));
        break;
      case 'apple':
        price = quantity * 1.2;
        console.log(price.toFixed(2));
        break;
      case 'orange':
        price = quantity * 0.85;
        console.log(price.toFixed(2));
        break;
      case 'grapefruit':
        price = quantity * 1.45;
        console.log(price.toFixed(2));
        break;
      case 'kiwi':
        price = quantity * 2.7;
        console.log(price.toFixed(2));
        break;
      case 'pineapple':
        price = quantity * 5.5;
        console.log(price.toFixed(2));
        break;
      case 'grapes':
        price = quantity * 3.85;
        console.log(price.toFixed(2));
        break;

      default:
        console.log('error');
        break;
    }
  } else if (day === 'Saturday' || day === 'Sunday') {
    switch (fruit) {
      case 'banana':
        price = quantity * 2.7;
        console.log(price.toFixed(2));
        break;
      case 'apple':
        price = quantity * 1.25;
        console.log(price.toFixed(2));
        break;
      case 'orange':
        price = quantity * 0.9;
        console.log(price.toFixed(2));
        break;
      case 'grapefruit':
        price = quantity * 1.6;
        console.log(price.toFixed(2));
        break;
      case 'kiwi':
        price = quantity * 3.0;
        console.log(price.toFixed(2));
        break;
      case 'pineapple':
        price = quantity * 5.6;
        console.log(price.toFixed(2));
        break;
      case 'grapes':
        price = quantity * 4.2;
        console.log(price.toFixed(2));
        break;
      default:
        console.log('error');
        break;
    }
  } else {
    console.log('error');
  }
}

fruitShop(['apple', 'Tuesday', '2']);
