function solve(input) {
  let start = input[0];
  let finish = input[1];

  let fnum = Number(start[0]);
  let snum = Number(start[1]);
  let tnum = Number(start[2]);
  let lnum = Number(start[3]);

  let efnum = Number(finish[0]);
  let esnum = Number(finish[1]);
  let etnum = Number(finish[2]);
  let elnum = Number(finish[3]);
  let printNums = '';

  for (let a = fnum; a <= efnum; a++) {
    for (let b = snum; b <= esnum; b++) {
      for (let c = tnum; c <= etnum; c++) {
        for (let d = lnum; d <= elnum; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            printNums += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }

  console.log(printNums);
}

solve(['2345', '6789']);
