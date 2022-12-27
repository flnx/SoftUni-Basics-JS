function hotelRoom(input) {
  let season = input[0];
  let numberOfNights = Number(input[1]);

  let = studioPrice = 0.0;
  let = apartmentPrice = 0.0;

  // numberOfNights--;

  switch (season) {
    case 'May':
    case 'October':
      studioPrice = numberOfNights * 50;
      apartmentPrice = numberOfNights * 65;

      if (numberOfNights > 7 && numberOfNights <= 14) {
        studioPrice = studioPrice * 0.95;
      } else if (numberOfNights > 14) {
        studioPrice = studioPrice * 0.7;
      }
      break;

    case 'June':
    case 'September':
      studioPrice = numberOfNights * 75.2;
      apartmentPrice = numberOfNights * 68.7;

      if (numberOfNights > 14) {
        studioPrice = studioPrice * 0.8;
      }
      break;

    case 'July':
    case 'August':
      studioPrice = numberOfNights * 76;
      apartmentPrice = numberOfNights * 77;
      break;
  }

  if (numberOfNights > 14) {
    apartmentPrice = apartmentPrice * 0.9;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);
