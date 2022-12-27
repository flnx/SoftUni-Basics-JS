function solve(input) {
  let change = Number(input[0]);
  let convert = Math.floor(change * 100);

  let coinsCounter = 0;

  while (convert > 0) {
    coinsCounter++;

    if (convert >= 200) {
      convert -= 200;
    } else if (convert >= 100) {
      convert -= 100;
    } else if (convert >= 50) {
      convert -= 50;
    } else if (convert >= 20) {
      convert -= 20;
    } else if (convert >= 10) {
      convert -= 10;
    } else if (convert >= 5) {
      convert -= 5;
    } else if (convert >= 2) {
      convert -= 2;
    } else {
      convert -= 1;
    }
  }

  console.log(coinsCounter);
}

solve(['0.56']);
