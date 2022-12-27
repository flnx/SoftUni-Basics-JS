function solve(input) {
  let index = 0;
  let actor = input[index];
  index++;
  let startingPoints = Number(input[index]);
  index++;
  let evaluators = Number(input[index]);
  index++;

  for (let i = 0; i < evaluators; i++) {
    let addName = input[index];
    index++;
    let addPoints = Number(input[index]);
    index++;
    startingPoints = startingPoints + (addPoints * addName.length) / 2;

    if (startingPoints > 1250.5) {
      console.log(
        `Congratulations, ${actor} got a nominee for leading role with ${startingPoints.toFixed(
          1
        )}!`
      );
      break;
    }
  }

  let diff = Math.abs(startingPoints - 1250.5);
  if (startingPoints <= 1250.5) {
    console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
  }
}
solve([
  'Zahari Baharov',
  '205',
  '4',
  'Johnny Depp',
  '45',
  'Will Smith',
  '29',
  'Jet Lee',
  '10',
  'Matthew Mcconaughey',
  '39',
]);
