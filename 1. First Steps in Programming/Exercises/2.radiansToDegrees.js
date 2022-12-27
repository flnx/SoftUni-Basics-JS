// Radians to Degrees

function radians(input) {
  let radian = Number(input[0]);
  let calc = (radian * 180) / Math.PI;

  console.log(calc);
}

radians([3.1416]);

// output: 180.0004209182994
