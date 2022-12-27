function solve(input) {
  let index = 0;
  let command = input[index];
  index++;
  let startingDistance = 5364;
  let daysCounter = 1;
  let isClimbed = false;

  while (command !== 'END') {
    let distanceTravelled = Number(input[index]);
    index++;

    if (command === 'Yes') {
      daysCounter++;
    }

    if (daysCounter > 5) {
      break;
    }

    startingDistance += distanceTravelled;

    if (startingDistance >= 8848) {
      isClimbed = true;
      break;
    }

    command = input[index];
    index++;
  }

  if (isClimbed) {
    console.log(`Goal reached for ${daysCounter} days!`);
  } else {
    console.log('Failed!');
    console.log(`${startingDistance}`);
  }
}

solve(['Yes', '1000', 'Yes', '945', 'No', '1200', 'END']);
