// function solve(input) {
//   let n = Number(input[0]);

//   let sumLeft = 0;
//   let sumRight = 0;

//   for (let i = 1; i <= n; i++) {
//     sumLeft += Number(input[i]);
//   }

//   for (let i = n + 1; i <= 2 * n; i++) {
//     sumRight += Number(input[i]);
//   }

//   let diff = Math.abs(sumLeft - sumRight);

//   if (sumLeft === sumRight) {
//     console.log('Yes!');
//   } else {
//     console.log(`No, there's a difference of ${diff}`);
//   }
// }

// solve(['2', '10', '10', '10', '20']);

function bestPlayer(input) {
  let index = 0;
  let namePlayer = input[index];
  index++;


  maxScore = 0;
  currentName = ``;
  bestPlayer = ``;

  while (namePlayer !== `END`) {
      let currentName = namePlayer;
      let goalScored = Number(input[index]);
      index++;
      let goal = goalScored;
      if (goal > maxScore) {
          maxScore = goal;
          bestPlayer = currentName;
      }
      if (goal >= 10) {
          break;
      }

      namePlayer = input[index];
      index++;
  }
  console.log(`${bestPlayer} is the best player!`);
  if (maxScore >= 3) {
      console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
  } else if (maxScore < 3) {
      console.log(`He has scored ${maxScore} goals.`)
  }

}
