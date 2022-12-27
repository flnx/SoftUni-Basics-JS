// new house

function newHouse(input) {
  let flower = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);

  price = 0.0;

  switch (flower) {
    case 'Roses':
      price = quantity * 5;
      if (quantity > 80) {
        price = price * 0.9;
      }
      break;
    case 'Dahlias':
      price = quantity * 3.8;
      if (quantity > 90) {
        price = price * 0.85;
      }
      break;
    case 'Tulips':
      price = quantity * 2.8;
      if (quantity > 80) {
        price = price * 0.85;
      }
      break;
    case 'Narcissus':
      price = quantity * 3;
      if (quantity < 120) {
        price = price * 1.15;
      }
      break;
    case 'Gladiolus':
      price = quantity * 2.5;
      if (quantity < 80) {
        price = price * 1.2;
      }
      break;
  }

  let diff = Math.abs(budget - price);

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse(['Narcissus', '119', '360']);
