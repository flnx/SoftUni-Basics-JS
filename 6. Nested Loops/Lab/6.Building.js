function solve(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let i = floors; i > 0; i--) {
    let z = '';
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        z += `L${i}${j} `;
      } else if (i % 2 === 0) {
        z += `O${i}${j} `;
      } else {
        z += `A${i}${j} `;
      }
    }
    console.log(z);
  }
}

solve(['9', '5']);
