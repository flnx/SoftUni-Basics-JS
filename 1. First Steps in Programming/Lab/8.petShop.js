function petShop(input) {
  let dogFood = Number(input[0]);
  let catFood = Number(input[1]);
  let dogFoodPrice = 2.5;
  let catFoodPrice = 4;
  let sumDog = dogFood * dogFoodPrice;
  let sumCat = catFood * catFoodPrice;
  let total = sumDog + sumCat;

  console.log(`End price - ${total} lv`);
}
petShop(['5', '4']);

// output: End price - 28.5 lv
