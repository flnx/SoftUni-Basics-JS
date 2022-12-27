// fishing boat

function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let numberOfFisherman = Number(input[2]);

  boatPrice = 0.0;

  switch (season) {
    case 'Spring':
      boatPrice = 3000;
      break;
    case 'Summer':
    case 'Autumn':
      boatPrice = 4200;
      break;
    case 'Winter':
      boatPrice = 2600;
      break;
  }

  if (numberOfFisherman <= 6) {
    boatPrice = boatPrice * 0.9;
  } else if (numberOfFisherman > 6 && numberOfFisherman <= 11) {
    boatPrice = boatPrice * 0.85;
  } else if (numberOfFisherman >= 12) {
    boatPrice = boatPrice * 0.75;
  }

  if (numberOfFisherman % 2 === 0 && season !== 'Autumn') {
    boatPrice = boatPrice * 0.95;
  }

  let diff = Math.abs(budget - boatPrice);

  if (budget >= boatPrice) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(['2000', 'Winter', '13']);
