// Shopping

function shopping(input) {
  let budget = Number(input[0]);
  let gpu = Number(input[1]);
  let cpu = Number(input[2]);
  let ram = Number(input[3]);

  let gpuPrice = gpu * 250;
  let cpuPrice = cpu * gpuPrice * 0.35;
  let ramPrice = ram * gpuPrice * 0.1;

  let sum = gpuPrice + cpuPrice + ramPrice;
  let discount = sum * 0.15;

  if (gpu > cpu) {
    sum = sum - discount;
  }

  let total = Math.abs(budget - sum);

  if (sum <= budget) {
    console.log(`You have ${total.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${total.toFixed(2)} leva more!`);
  }
}

shopping(['920.45', '3', '1', '1']);
