// summer outfit
function summerOutfit(input) {
  let degrees = Number(input[0]);
  let daytime = input[1];

  let outfit = '';
  let shoes = '';

  if (degrees >= 10 && degrees <= 18) {
    switch (daytime) {
      case 'Morning':
        outfit = 'Sweatshirt';
        shoes = 'Sneakers';
        break;

      case 'Afternoon':
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
    }
  } else if (degrees > 18 && degrees <= 24) {
    switch (daytime) {
      case 'Morning':
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
      case 'Afternoon':
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        break;
    }
  } else if (degrees >= 25) {
    switch (daytime) {
      case 'Morning':
        outfit = 'T-Shirt';
        shoes = 'Sandals';
        break;
      case 'Afternoon':
        outfit = 'Swim Suit';
        shoes = 'Barefoot';
        break;
      case 'Evening':
        outfit = 'Shirt';
        shoes = 'Moccasins';
        break;
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(['25', 'Evening']);

// summer outfit
function summerOutfit(input) {
  let degrees = Number(input[0]);
  let daytime = input[1];

  let outfit = '';
  let shoes = '';

  if (degrees >= 10 && degrees <= 18) {
    if (daytime === 'Morning') {
      outfit = 'Sweatshirt';
      shoes = 'Sneakers';
    } else if (daytime === 'Afternoon' || daytime === 'Evening') {
      outfit = 'Shirt';
      shoes = 'Moccasins';
    }
  } else if (degrees > 18 && degrees <= 24) {
    if (daytime === 'Morning' || daytime === 'Evening') {
      outfit = 'Shirt';
      shoes = 'Moccasins';
    } else if (daytime === 'Afternoon') {
      outfit = 'T-Shirt';
      shoes = 'Sandals';
    }
  } else if (degrees >= 25) {
    if (daytime === 'Morning') {
      outfit = 'T-Shirt';
      shoes = 'Sandals';
    } else if (daytime === 'Afternoon') {
      outfit = 'Swim Suit';
      shoes = 'Barefoot';
    } else if (daytime === 'Evening') {
      outfit = 'Shirt';
      shoes = 'Moccasins';
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(['25', 'Evening']);

// summer outfit
