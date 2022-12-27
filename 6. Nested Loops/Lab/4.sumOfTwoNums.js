function solve(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magic = Number(input[2]);
  let combination = 0;
  let isSolved = false;

  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      combination++;
      let result = i + j;
      if (result === magic) {
        isSolved = true;
        console.log(`Combination N:${combination} (${i} + ${j} = ${magic})`);
        break;
      }
    }
    if (isSolved) {
      break;
    }
  }
  if (!isSolved) {
    console.log(`${combination} combinations - neither equals ${magic}`);
  }
}

solve(['1', '10', '5']);
