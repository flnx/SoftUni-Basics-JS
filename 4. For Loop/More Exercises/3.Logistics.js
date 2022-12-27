function solve(input) {
  let index = 0;
  let loadsNumber = Number(input[index]);
  index++;

  let loadBus = 0;
  let loadTruck = 0;
  let loadTrain = 0;

  for (let i = 0; i < loadsNumber; i++) {
    let weight = Number(input[index]);
    index++;

    if (weight <= 3) {
      loadBus += weight;
    } else if (weight >= 4 && weight <= 11) {
      loadTruck += weight;
    } else {
      loadTrain += weight;
    }
  }

  let busPrice = loadBus * 200;
  let truckPrice = loadTruck * 175;
  let trainPrice = loadTrain * 120;

  let totalWeight = loadBus + loadTruck + loadTrain;
  let totalPrice = busPrice + truckPrice + trainPrice;
  let avgPrice = totalPrice / totalWeight;

  let busPercentage = (loadBus / totalWeight) * 100;
  let truckPercentage = (loadTruck / totalWeight) * 100;
  let trainPercentage = (loadTrain / totalWeight) * 100;

  console.log(avgPrice.toFixed(2));
  console.log(`${busPercentage.toFixed(2)}%`);
  console.log(`${truckPercentage.toFixed(2)}%`);
  console.log(`${trainPercentage.toFixed(2)}%`);
}
solve(['5', '2', '10', '20', '1', '7']);
