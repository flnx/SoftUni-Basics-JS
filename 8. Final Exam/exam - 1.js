function solve(input) {
  let paper = Number(input[0]);
  let fabric = Number(input[1]);
  let glueInLitres = Number(input[2]);
  let discount = Number(input[3]) / 100;

  let paperPrice = 5.8;
  let fabricPrice = 7.2;
  let gluePricePerLiter = 1.2;

  let calcPrice =
    paper * paperPrice + fabric * fabricPrice + glueInLitres * gluePricePerLiter;
  let endPrice = calcPrice - calcPrice * discount;

  console.log(endPrice.toFixed(3));
}

solve(['4', '2', '5', '13']);