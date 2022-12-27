// food delivery

function foodDelivery(input) {
  let chickenPrice = 10.35;
  let fishPrice = 12.4;
  let veganPrice = 8.15;
  let delivery = 2.5;

  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let veganMenu = Number(input[2]);

  let orderPrice =
    chickenMenu * chickenPrice + fishMenu * fishPrice + veganMenu * veganPrice;
  let desert = orderPrice * (20 / 100);
  let sum = orderPrice + desert + delivery;

  console.log(sum);
}

foodDelivery(['9', '2', '6']);

// output: 202.72