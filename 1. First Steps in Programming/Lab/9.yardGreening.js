function yardGreening(input) {
  let squareMeter = input[0];
  let squareMeterPrice = 7.61;
  let price = squareMeter * squareMeterPrice;
  let discount = price * 0.18;
  let finalPrice = price - discount;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
yardGreening("550");

// output: The final price is: 31.201000000000004 lv.
// output: The discount is: 6.849 lv.
