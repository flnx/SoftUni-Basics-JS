function solve(input) {
  let strawberriesPrice = Number(input[0]);

  let bananasQuantity = Number(input[1]);
  let orangesQuantity = Number(input[2]);
  let raspberriesQuantity = Number(input[3]);
  let strawberriesQuantity = Number(input[4]);

  let raspberriesPrice = strawberriesPrice * 0.5;
  let orangesPrice = raspberriesPrice * 0.6;
  let bananasPrice = raspberriesPrice * 0.2;

  let sumAll =
    strawberriesPrice * strawberriesQuantity +
    bananasPrice * bananasQuantity +
    orangesPrice * orangesQuantity +
    raspberriesPrice * raspberriesQuantity;

  console.log(sumAll.toFixed(2));
}

solve(['63.5', '3.57', '6.35', '8.15', '2.5']);
