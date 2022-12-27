function solve(input) {
  let index = 0;
  let nums = Number(input[index]);
  index++;

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 0; i <= nums; i++) {
    let printNums = Number(input[index]);
    index++;

    if (printNums < 200) {
      p1++;
    } else if (printNums >= 200 && printNums <= 399) {
      p2++;
    } else if (printNums >= 400 && printNums <= 599) {
      p3++;
    } else if (printNums >= 600 && printNums <= 799) {
      p4++;
    } else if (printNums >= 800) {
      p5++;
    }
  }

  p1 = (p1 / nums) * 100;
  p2 = (p2 / nums) * 100;
  p3 = (p3 / nums) * 100;
  p4 = (p4 / nums) * 100;
  p5 = (p5 / nums) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}

solve([
  '14',
  '53',
  '7',
  '56',
  '180',
  '450',
  '920',
  '12',
  '7',
  '150',
  '250',
  '680',
  '2',
  '600',
  '200',
]);
