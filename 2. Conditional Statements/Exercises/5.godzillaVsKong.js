// Godzilla vs Kong

function GodzillaVsKong(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let clothing = Number(input[2]);

  let decoration = budget * 0.1;
  let clothingPrice = clothing * extras;
  let discount = clothingPrice * 0.1;

  if (extras > 150) {
    clothingPrice = clothingPrice - discount;
  }

  let costs = clothingPrice + decoration;
  let afterMath = Math.abs(budget - costs);

  if (budget >= costs) {
    console.log('Action!');
    console.log(`Wingard starts filming with ${afterMath.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${afterMath.toFixed(2)} leva more.`);
  }
}

GodzillaVsKong(['20000', '120', '55.5']);
