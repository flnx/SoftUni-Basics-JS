function solve(input) {
  let index = 0;
  let jury = Number(input[index]);
  index++;
  let presentationName = input[index];
  index++;
  let avgGrade = 0;
  let tasks = 0;

  while (presentationName !== 'Finish') {
    let currentGrade = 0;
    let currentAvgGrade = 0;

    for (let i = 0; i < jury; i++) {
      let gradesCounter = Number(input[index]);
      index++;
      tasks++;
      currentGrade += gradesCounter;
    }

    currentAvgGrade = currentGrade / jury;
    console.log(`${presentationName} - ${currentAvgGrade.toFixed(2)}.`);

    avgGrade += currentGrade;
    presentationName = input[index];
    index++;
  }

  avgGrade = avgGrade / tasks;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
solve(['3', 'Arrays', '4.53', '5.23', '5.00', 'Lists', '5.83', '6.00', '5.42', 'Finish']);
