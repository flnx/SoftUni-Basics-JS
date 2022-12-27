function solve(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = Number(input[3]);

  price = 0;

  if (destination === 'Dubai') {
    switch (season) {
      case 'Winter':
        price += 45000 * 0.7;
        break;
      case 'Summer':
        price += 40000 * 0.7;
        break;
    }
  } else if (destination === 'Sofia') {
    switch (season) {
      case 'Winter':
        price += 17000 * 1.25;
        break;
      case 'Summer':
        price += 12500 * 1.25;
        break;
    }
  } else if (destination === 'London') {
    switch (season) {
      case 'Winter':
        price += 24000;
        break;
      case 'Summer':
        price += 20250;
        break;
    }
  }

  let endPrice = price * days;
  let diff = Math.abs(budget - endPrice);

  if (budget >= endPrice) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

solve(['400000', 'Sofia', 'Winter', '20']);
