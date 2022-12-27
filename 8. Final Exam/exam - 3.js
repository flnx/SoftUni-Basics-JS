function solve(input) {
  let dancers = Number(input[0]);
  let points = Number(input[1]);
  let season = input[2];
  let destination = input[3];

  let moneyPrize = 0;

  switch (destination) {
    case 'Bulgaria':
      moneyPrize = points * dancers;
      if (season === 'summer') {
        moneyPrize = moneyPrize * 0.95;
      } else if (season === 'winter') {
        moneyPrize = moneyPrize * 0.92;
      }
      break;
    case 'Abroad':
      moneyPrize = points * dancers * 1.5;
      if (season === 'summer') {
        moneyPrize = moneyPrize * 0.9;
      } else if (season === 'winter') {
        moneyPrize = moneyPrize * 0.85;
      }
      break;
  }

  let charity = moneyPrize * 0.75;
  moneyPrize = moneyPrize - charity;
  let dancersMoney = moneyPrize / dancers;

  console.log(`Charity - ${charity.toFixed(2)}`);
  console.log(`Money per dancer - ${dancersMoney.toFixed(2)}`);
}
solve(['25', '98', 'winter', 'Bulgaria']);
