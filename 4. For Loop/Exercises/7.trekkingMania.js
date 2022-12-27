function solve(input) {
  let index = 0;

  let totalGroups = Number(input[index]);
  index++;

  let g1 = 0;
  let g2 = 0;
  let g3 = 0;
  let g4 = 0;
  let g5 = 0;

  for (let i = 0; i < totalGroups; i++) {
    let addGroup = Number(input[index]);
    index++;

    if (addGroup <= 5) {
      g1 += addGroup;
    } else if (addGroup >= 6 && addGroup <= 12) {
      g2 += addGroup;
    } else if (addGroup >= 13 && addGroup <= 25) {
      g3 += addGroup;
    } else if (addGroup >= 26 && addGroup <= 40) {
      g4 += addGroup;
    } else {
      g5 += addGroup;
    }
  }
  let sumPeople = g1 + g2 + g3 + g4 + g5;

  let g1p = (g1 / sumPeople) * 100;
  let g2p = (g2 / sumPeople) * 100;
  let g3p = (g3 / sumPeople) * 100;
  let g4p = (g4 / sumPeople) * 100;
  let g5p = (g5 / sumPeople) * 100;

  console.log(`${g1p.toFixed(2)}%`);
  console.log(`${g2p.toFixed(2)}%`);
  console.log(`${g3p.toFixed(2)}%`);
  console.log(`${g4p.toFixed(2)}%`);
  console.log(`${g5p.toFixed(2)}%`);
}
solve(['5', '25', '41', '31', '250', '6']);
