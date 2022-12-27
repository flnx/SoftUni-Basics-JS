function solve(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);
  let apartmentSize = w * l * h;
  let index = 3;
  let command = input[index];
  let isThereSpace = true;

  while (command !== 'Done') {
    let boxCounter = Number(command);

    if (apartmentSize >= boxCounter) {
      apartmentSize -= boxCounter;
    } else {
      let diff = Math.abs(apartmentSize - boxCounter);
      console.log(`No more free space! You need ${diff} Cubic meters more.`);
      isThereSpace = false;
      break;
    }
    index++;
    command = input[index];
  }

  if (isThereSpace) {
    console.log(`${apartmentSize} Cubic meters left. `);
  }
}

// solve(["10", "10", "2", "20", "20", "20", "20", "122" ]);
solve(['10', '1', '2', '4', '6', 'Done']);
