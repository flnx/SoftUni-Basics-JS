function solve(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let totalFood = Number(input[index]);
  index++;
  let totalDogFood = 0;
  let totalCatFood = 0;
  let daysCounter = 0;
  let biscuit = 0;

  for (let i = 0; i < days; i++) {
    daysCounter++;

    let dogFood = Number(input[index]);
    index++;
    let catFood = Number(input[index]);
    index++;

    totalDogFood += dogFood;
    totalCatFood += catFood;

    if (daysCounter === 3) {
      biscuit += (dogFood + catFood) * 0.1;
      daysCounter = 0;
    }
  }

  let totalFoodEatenByBoth = totalDogFood + totalCatFood;
  let totalFoodBothPercentage = (totalFoodEatenByBoth / totalFood) * 100;
  let totalFoodEatenByDog = (totalDogFood / totalFoodEatenByBoth) * 100;
  let totalFoodEatenByCat = (totalCatFood / totalFoodEatenByBoth) * 100;

  console.log(`Total eaten biscuits: ${biscuit.toFixed(0)}gr.`);
  console.log(`${totalFoodBothPercentage.toFixed(2)}% of the food has been eaten.`);
  console.log(`${totalFoodEatenByDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${totalFoodEatenByCat.toFixed(2)}% eaten from the cat.`);
}
solve(['3', '1000', '300', '20', '100', '30', '110', '40']);
