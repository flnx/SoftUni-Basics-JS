function solve(input) {
  let index = 0;
  let pcModels = Number(input[index]);
  index++;
  let totalSales = 0;
  let avgRating = 0;

  for (let i = 0; i < pcModels; i++) {
    let currentModel = input[index];
    index++;
    let rating = Number(currentModel[2]);
    let sales = Math.floor(currentModel / 10);
    avgRating += rating;

    if (rating === 2) {
      totalSales += 0;
    } else if (rating === 3) {
      totalSales += sales * 0.5;
    } else if (rating === 4) {
      totalSales += sales * 0.7;
    } else if (rating === 5) {
      totalSales += sales * 0.85;
    } else if (rating === 6) {
      totalSales += sales;
    }
  }

  avgRating = avgRating / pcModels;
  console.log(`${totalSales.toFixed(2)}`);
  console.log(`${avgRating.toFixed(2)}`);
}
solve(['2', '204', '206']);
