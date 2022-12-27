function solve(input) {
  let index = 0;
  let tabs = Number(input[index]);
  index++;
  let salary = Number(input[index]);
  index++;
  let fine = 0;

  for (let i = 0; i < tabs; i++) {
    let openedTabs = input[index];
    index++;
    switch (openedTabs) {
      case 'Facebook':
        fine += 150;
        break;
      case 'Instagram':
        fine += 100;
        break;
      case 'Reddit':
        fine += 50;
        break;
    }
  }

  let salaryLeft = salary - fine;

  if (salary <= fine) {
    console.log('You have lost your salary.');
  } else {
    console.log(salaryLeft);
  }
}
solve([
  '10',
  '750',
  'Facebook',
  'Dev.bg',
  'Instagram',
  'Facebook',
  'Reddit',
  'Facebook',
  'Facebook',
]);
