function solve(input) {
  let poorGrades = Number(input[0]);
  let index = 1;
  let currentTask = input[index];
  index++;
  let avgEvaluation = 0;
  let taskSolved = 0;
  let mistakes = 0;
  let isMistake = false;
  let lastTask = '';

  while (currentTask !== 'Enough') {
    let taskName = currentTask;
    let rate = Number(input[index]);
    index++;

    if (mistakes >= poorGrades) {
      isMistake = true;
      break;
    }

    if (rate <= 4) {
      mistakes++;
      taskSolved++;
      avgEvaluation += rate;
    } else {
      taskSolved++;
      avgEvaluation += rate;
    }

    lastTask = currentTask;
    currentTask = input[index];
    index++;
  }
  avgEvaluation = avgEvaluation / taskSolved;

  if (!isMistake) {
    console.log(`Average score: ${avgEvaluation.toFixed(2)}`);
    console.log(`Number of problems: ${taskSolved}`);
    console.log(`Last problem: ${lastTask}`);
  } else {
    console.log(`You need a break, ${mistakes} poor grades.`);
  }
}
// solve(["2",

//     "Income",

//     "3",

//     "Game Info ",

//     "6",

//     "Best Player ",

//     "4"
// ])

solve(['3', 'Money', '6', 'Story', '4', 'Spring Time ', '5', 'Bus', '6', 'Enough']);
