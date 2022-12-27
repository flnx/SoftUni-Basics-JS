// aquarium

function aquarium(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]);

  let volume = length * width * height;
  let litres = volume / 1000;
  percentage = 1 - percentage / 100;

  let sum = litres * percentage;

  console.log(sum);
}

aquarium(['105', '77', '89', '18.5']);

//output: 586.445475