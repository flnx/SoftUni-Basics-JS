// speed info

function speedInfo(input) {
  let currentSpeed = Number(input[0]);

  if (currentSpeed <= 10) {
    console.log('slow');
  } else if (currentSpeed <= 50) {
    console.log('average');
  } else if (currentSpeed <= 150) {
    console.log('fast');
  } else if (currentSpeed <= 1000) {
    console.log('ultra fast');
  } else {
    console.log('extremely fast');
  }
}

speedInfo(['51']);
