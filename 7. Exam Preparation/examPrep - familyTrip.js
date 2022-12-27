function solve(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let otherCosts = Number(input[3]) / 100;
  let costsPercentage = otherCosts * budget;

  if (nights > 7) {
    pricePerNight = pricePerNight * 0.95;
  }

  let nightsPrice = nights * pricePerNight;
  let currentBudget = nightsPrice + costsPercentage;
  let diff = Math.abs(budget - currentBudget);

  if (budget >= currentBudget) {
    console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}

solve(['500', '7', '66', '15']);
