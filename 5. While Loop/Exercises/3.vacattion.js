function solve(input) {
  let index = 0;
  let moneyNeeded = Number(input[0]);
  index++;
  let currentMoney = Number(input[index]);
  index++;

  let daysSaved = 0;
  let daysCounter = 0;
  let isPossibleToSave = true;

  while (moneyNeeded > currentMoney) {
    daysSaved++;
    let action = input[index];
    index++;
    let currentAmount = Number(input[index]);
    index++;

    switch (action) {
      case 'spend':
        currentMoney -= currentAmount;
        daysCounter++;
        break;

      case 'save':
        currentMoney += currentAmount;
        daysCounter = 0;
        break;
    }

    if (currentMoney < 0) {
      currentMoney = 0;
    }

    if (daysCounter === 5) {
      console.log("You can't save the money.");
      console.log(`${daysSaved}`);
      isPossibleToSave = false;
      break;
    }
  }

  if (isPossibleToSave) {
    console.log(`You saved the money for ${daysSaved} days.`);
  }
}

solve(['250', '150', 'spend', '50', 'spend', '50', 'save', '100', 'save', '100']);
