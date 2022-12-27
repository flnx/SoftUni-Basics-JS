function solve(input) {
  let tShirtPrice = Number(input[0]);
  let amountNeeded = Number(input[1]);

  let shortsPrice = tShirtPrice * 0.75;
  let socksPrice = shortsPrice * 0.2;
  let shoes = (tShirtPrice + shortsPrice) * 2;
  let discountCard = 0.15;

  let calcPrice = tShirtPrice + shortsPrice + socksPrice + shoes;
  let endPrice = calcPrice - calcPrice * discountCard;
  let diff = Math.abs(amountNeeded - endPrice);

  if (amountNeeded <= endPrice) {
    console.log('Yes, he will earn the world-cup replica ball!');
    console.log(`His sum is ${endPrice.toFixed(2)} lv.`);
  } else {
    console.log('No, he will not earn the world-cup replica ball.');
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}
solve(['59.99', '500']);
