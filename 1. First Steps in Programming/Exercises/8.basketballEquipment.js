// basketball outfit

function basketball(input) {
  let yearlyPayment = Number(input[0]);

  let sneakersPrice = yearlyPayment - yearlyPayment * 0.4;
  let outfitPrice = sneakersPrice - sneakersPrice * 0.2;
  let ball = outfitPrice / 4;
  let accessories = ball / 5;

  let sum = sneakersPrice + outfitPrice + ball + accessories + yearlyPayment;

  console.log(sum);
}

basketball(['550']);

// output: 1223.2
