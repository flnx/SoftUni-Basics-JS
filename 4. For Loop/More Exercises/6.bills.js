function solve(input) {
  let index = 0;
  let months = Number(input[index]);
  index++;
  let electricityBill = 0;
  let waterBill = 20;
  let internetBill = 15;
  let others = 0;

  for (let i = 0; i < months; i++) {
    let electricity = Number(input[index]);
    let otherCurrent = 0;
    index++;
    electricityBill += electricity;
    otherCurrent = (electricity + waterBill + internetBill) * 1.2;
    others += otherCurrent;
  }

  internetBill = internetBill * months;
  waterBill = waterBill * months;

  let average = (electricityBill + waterBill + internetBill + others) / months;

  console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
  console.log(`Water: ${waterBill.toFixed(2)} lv`);
  console.log(`Internet: ${internetBill.toFixed(2)} lv`);
  console.log(`Other: ${others.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}

solve(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
