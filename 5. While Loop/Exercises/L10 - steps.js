function solve(input) {
  let index = 0;
  let command = input[index];
  let target = 10000;
  let steps = 0;

  while (command !== 'Going home') {
    let stepsCounter = Number(command);
    steps += stepsCounter;

    if (steps >= target) {
      break;
    }

    index++;
    command = input[index];
  }

  if (command === 'Going home') {
    index++;
    let stepsCounter = Number(input[index]);
    steps += stepsCounter;
  }

  let diff = Math.abs(target - steps);
  if (steps >= target) {
    console.log('Goal reached! Good job!');
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

solve(['1000', '1500', '2000', '6500']);
