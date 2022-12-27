// toys shop

function toysShop(input) {
  let vacation = Number(input[0]);
  let puzzle = Number(input[1]);
  let doll = Number(input[2]);
  let teddyBear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let toysCount = puzzle + doll + teddyBear + minion + truck;
  let profit = puzzle * 2.6 + doll * 3 + teddyBear * 4.1 + minion * 8.2 + truck * 2;

  if (toysCount >= 50) {
    profit = profit - profit * 0.25;
  }

  let profitAfterRent = profit * 0.9;
  let moneyLeftOrNeeded = Math.abs(profitAfterRent - vacation);

  if (profitAfterRent >= vacation) {
    console.log(`Yes! ${moneyLeftOrNeeded.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${moneyLeftOrNeeded.toFixed(2)} lv needed.`);
  }
}

toysShop(['320', '8', '2', '5', '5', '1']);
