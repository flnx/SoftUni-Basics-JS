function solve(input) {
  let name = input[0];
  let index = 1;
  let evaluation = Number(input[index]);
  let grade = 1;
  let sumAll = 0;

  while (evaluation > 1) {
    let counter = Number(input[index]);

    if (evaluation < 4) {
      console.log(`${name} has been excluded at ${grade} grade`);
      break;
    } else {
      grade++;
    }

    sumAll += counter;
    index++;
    evaluation = Number(input[index]);
  }

  sumAll = sumAll / 12;

  if (grade >= 12) {
    console.log(`${name} graduated. Average grade: ${sumAll.toFixed(2)}`);
  }
}
solve(['Gosho', '5', '5.5', '5', '5.43', '5.5', '6', '5.55', '5', '6', '6', '5.43', '5']);
