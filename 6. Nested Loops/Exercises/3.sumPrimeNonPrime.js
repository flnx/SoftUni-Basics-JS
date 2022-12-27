function solve(input) {
  let index = 0;
  let command = input[index];
  index++;

  let primes = 0;
  let nonPrimes = 0;

  while (command !== 'stop') {
    let counter = Number(command);

    if (counter < 0) {
      console.log('Number is negative.');
      command = input[index];
      index++;
      continue;
    }

    if (counter === 1) {
      primes += counter;
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;
    for (let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes += counter;
    } else {
      nonPrimes += counter;
    }

    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${primes}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimes}`);
}

solve(['3', '9', '0', '7', '19', '4', 'stop']);
