function solve(input) {
  let w = Number(input[0]);
  let h = Number(input[1]);
  let index = 2;
  let command = input[index];
  let cakeSize = w * h;
  let isCakeFinished = false;

  while (command !== 'STOP') {
    let pieceCounter = Number(command);

    if (cakeSize >= pieceCounter) {
      cakeSize -= pieceCounter;
    } else {
      isCakeFinished = true;
      break;
    }

    index++;
    command = input[index];
  }

  let diff = Math.abs(command - cakeSize);

  if (isCakeFinished) {
    console.log(`No more cake left! You need ${diff} pieces more.`);
  } else {
    console.log(`${cakeSize} pieces are left.`);
  }
}

solve(['10', '10', '20', '20', '20', '20', '21']);
// solve(["10",

//     "2",

//     "2",

//     "4",

//     "6",

//     "STOP"
// ])
