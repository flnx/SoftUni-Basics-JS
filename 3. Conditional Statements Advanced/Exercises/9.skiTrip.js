// ski trip

function skiTrip(input) {
  let days = Number(input[0]);
  let type = input[1];
  let rating = input[2];

  let price = 0.0;
  days--;

  switch (type) {
    case 'room for one person':
      price = 18 * days;
      break;
    case 'apartment':
      price = 25 * days;
      if (days < 10) {
        price = price * 0.7;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.65;
      } else if (days > 15) {
        price = price * 0.5;
      }

      break;
    case 'president apartment':
      price = 35 * days;
      if (days < 10) {
        price = price * 0.9;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.85;
      } else if (days > 15) {
        price = price * 0.8;
      }
      break;
  }

  if (rating === 'positive') {
    price = price * 1.25;
  } else if (rating === 'negative') {
    price = price * 0.9;
  }

  console.log(price.toFixed(2));
}
skiTrip(['2', 'apartment', 'positive']);
