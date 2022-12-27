function solve(input) {
  let destination = input[0];
  let index = 1;

  while (destination !== 'End') {
    let budgetNeeded = Number(input[index]);
    index++;
    let broiKintite = Number(input[index]);
    let savedMoney = 0;
    while (savedMoney < budgetNeeded) {
      broiKintite = Number(input[index]);
      savedMoney += broiKintite;
      index++;
    }
    console.log(`Going to ${destination}!`);
    destination = input[index];
    index++;
  }
}

solve([
  'Greece',
  '1000',
  '200',
  '200',
  '300',
  '100',
  '150',
  '240',
  'Spain',
  '1200',
  '300',
  '500',
  '193',
  '423',
  'End',
]);

// solve(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End']);
