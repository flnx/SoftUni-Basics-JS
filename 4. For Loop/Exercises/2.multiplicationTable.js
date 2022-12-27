function solve(input) {
  let num = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let multiply = i * num;
    console.log(`${i} * ${num} = ${multiply}`);
  }
}

solve(['2']);
