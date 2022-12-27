function solve(input) {
  let age = Number(input[0]);
  let washMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let toyCounter = 0;
  let currentMoney = 10;
  let addMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      currentMoney += addMoney - 1;
      addMoney += 10;
    } else {
      toyCounter++;
    }
  }

  let sellToys = toyPrice * toyCounter;
  let savedMoney = sellToys + currentMoney;
  let diff = Math.abs(washMachinePrice - savedMoney);

  if (savedMoney >= washMachinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}
solve(['21', '1570.98', '3']);
