function solve(input) {
  let index = 0;
  let playerOne = Number(input[index]);
  index++;
  let playerTwo = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  while (command !== 'End') {
    switch (command) {
      case 'one':
        playerTwo--;
        break;
      case 'two':
        playerOne--;
        break;
    } 

    if (playerOne === 0) {
      console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
      break;
    } else if (playerTwo === 0) {
      console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
      break;
    }
    command = input[index];
    index++;
  }

  if (command === 'End') {
    console.log(`Player one has ${playerOne} eggs left.`);
    console.log(`Player two has ${playerTwo} eggs left.`);
  }
}
solve(['6', '3', 'one', 'two', 'two', 'one', 'one']);
