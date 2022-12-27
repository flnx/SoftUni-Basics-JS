function solve(input) {
  let index = 0;
  let fieldCapacity = Number(input[index]);
  index++;
  let fans = Number(input[index]);
  index++;

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;

  for (let i = 0; i < fans; i++) {
    let sectors = input[index];
    index++;

    switch (sectors) {
      case 'A':
        sectorA++;
        break;
      case 'B':
        sectorB++;
        break;
      case 'V':
        sectorV++;
        break;
      case 'G':
        sectorG++;
        break;
    }
  }

  let secA = (sectorA / fans) * 100;
  let secB = (sectorB / fans) * 100;
  let secV = (sectorV / fans) * 100;
  let secG = (sectorG / fans) * 100;

  let teamOneFans = sectorA + sectorB;
  let teamTwoFans = sectorV + sectorG;
  let allFans = ((teamOneFans + teamTwoFans) / fieldCapacity) * 100;

  console.log(`${secA.toFixed(2)}%`);
  console.log(`${secB.toFixed(2)}%`);
  console.log(`${secV.toFixed(2)}%`);
  console.log(`${secG.toFixed(2)}%`);
  console.log(`${allFans.toFixed(2)}%`);
}

solve(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
