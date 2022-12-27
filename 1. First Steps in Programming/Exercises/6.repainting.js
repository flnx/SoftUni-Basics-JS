// painting

function painting(input) {
  let nylonPrice = 1.5;
  let paintPrice = 14.5;
  let pricePaintThinner = 5;
  let bags = 0.4;

  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let paintThinner = Number(input[2]);
  let workingHours = Number(input[3]);

  paint = paint * 1.1;
  nylon = nylon + 2;

  let endPrice =
    nylon * nylonPrice + paint * paintPrice + paintThinner * pricePaintThinner + bags;
  let workerPrice = endPrice * 0.3;
  let wageSum = endPrice + workerPrice * workingHours;

  console.log(wageSum);
}

painting(['10', '11', '4', '8']);

// output: 727.09