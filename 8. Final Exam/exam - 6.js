function solve(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);
  let n4 = Number(input[3]);
  let counter = 0;

  for (let a = n1; a <= 8; a++) {
    for (let b = 9; b >= n2; b--) {
      for (let c = n3; c <= 8; c++) {
        for (let d = 9; d >= n4; d--) {
          if (a % 2 === 0 && b % 2 !== 0 && c % 2 === 0 && d % 2 !== 0) {
            let sumFirst = `${a}${b}`;
            let sumSecond = `${c}${d}`;
            if (counter >= 6) {
              break;
            }

            if (sumFirst === sumSecond) {
              console.log('Cannot change the same player.');
            } else {
              console.log(`${a}${b} - ${c}${d}`);
              counter++;
            }
          }
        }
      }
    }
  }
}
solve(['6', '7', '5', '6']);
