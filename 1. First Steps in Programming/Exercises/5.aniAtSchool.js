// Ani at School

function school(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let liter = Number(input[2]);
  let discount = Number(input[3]);

  let sumPens = pens * 5.8;
  let sumMarkers = markers * 7.2;
  let sumLiter = liter * 1.2;

  let discountZ = discount / 100;

  let sumDiscount = sumPens + sumMarkers + sumLiter;
  let total = sumDiscount - sumDiscount * discountZ;
  console.log(total);
}
school(['2', '3', '4', '25']);

// output: 28.5
