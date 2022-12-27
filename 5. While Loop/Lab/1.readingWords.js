function solve(input) {
  let index = 0;
  let current = input[index];

  while (current !== 'Stop') {
    current = input[index];
    index++;

    if (current === 'Stop') {
      break;
    }

    console.log(current);
  }
}

solve([
  'Sofia',
  'Berlin',
  'Moscow',
  'Athens',
  'Madrid',
  'London',
  'Paris',
  'Stop',
  'AfterStop',
]);
