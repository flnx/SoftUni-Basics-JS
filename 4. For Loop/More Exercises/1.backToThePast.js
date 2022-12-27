function solve(input) {
  let inheritedMoney = Number(input[0]);
  let toYear = Number(input[1]);
  let spendings = 0;
  let age = 18;

  for (let i = 1800; i <= toYear; i++) {
    if (i % 2 === 0) {
      spendings += 12000;
      age++;
    } else {
      spendings += 12000 + 50 * age;
      age++;
    }
  }

  let diff = Math.abs(inheritedMoney - spendings);

  if (inheritedMoney >= spendings) {
    console.log(
      `Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`
    );
  } else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  }
}
solve(['100000.15', '1808']);
