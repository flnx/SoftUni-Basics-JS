function solve(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let moneyCounter = 0;
  let countAllWins = 0;
  let countAllLoses = 0;

  for (let i = 0; i < days; i++) {
    let command = input[index];
    index++;
    let dailyMoney = 0;
    let countDailyWins = 0;
    let countDailyLoses = 0;

    while (command !== 'Finish') {
      let sportName = command;
      let score = input[index];
      index++;

      switch (score) {
        case 'win':
          dailyMoney += 20;
          countDailyWins++;
          countAllWins++;
          break;
        case 'lose':
          countDailyLoses++;
          countAllLoses++;
          break;
      }
      command = input[index];
      index++;
    }
    if (countDailyWins > countDailyLoses) {
      moneyCounter += dailyMoney * 1.1;
    } else {
      moneyCounter += dailyMoney;
    }
  }

  if (countAllWins > countAllLoses) {
    moneyCounter = moneyCounter * 1.2;
    console.log(`You won the tournament! Total raised money: ${moneyCounter.toFixed(2)}`);
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${moneyCounter.toFixed(2)}`
    );
  }
}

solve([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
