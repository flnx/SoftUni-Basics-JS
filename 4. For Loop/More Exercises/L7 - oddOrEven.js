function solve(input) {
  let n = Number(input[0]);
  let sumEvens = 0;
  let sumOdds = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sumOdds += Number(input[i]);
    } else {
      sumEvens += Number(input[i]);
    }
  }

  let diff = Math.abs(sumEvens - sumOdds);

  if (sumEvens === sumOdds) {
    console.log('Yes');
    console.log(`Sum = ${sumOdds}`);
  } else {
    console.log(`No`);
    console.log(`Diff = ${diff}`);
  }
}
solve(['4', '3', '3', '4', '5']);
