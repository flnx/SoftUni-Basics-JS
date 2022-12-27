// Working Hours

function workingHours(input) {
  let time = Number(input[0]);
  let day = input[1];

  if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Thursday' ||
    day === 'Friday' ||
    day === 'Saturday'
  ) {
    if (time >= 10 && time <= 18) {
      console.log('open');
    } else {
      console.log('closed');
    }
  } else {
    console.log('closed');
  }
}

workingHours(['17', 'Sunday']);

// working hours example 2

function workingHours(input) {
  let time = Number(input[0]);
  let day = input[1];

  switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
    case 'Saturday':
      if (time >= 10 && time <= 18) {
        console.log('open');
      } else {
        console.log('closed');
      }
      break;
    default:
      console.log('closed');
  }
}

workingHours(['18', 'Monday']);
