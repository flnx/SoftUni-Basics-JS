// sum seconds

function sumSeconds(input) {
  let playerOne = Number(input[0]);
  let playerTwo = Number(input[1]);
  let playerThree = Number(input[2]);

  let playersTotalTime = playerOne + playerTwo + playerThree;
  let timeInMinutes = Math.floor(playersTotalTime / 60);
  let timeInSeconds = playersTotalTime % 60;

  if (timeInSeconds < 10) {
    console.log(`${timeInMinutes}:0${timeInSeconds}`);
  } else {
    console.log(`${timeInMinutes}:${timeInSeconds}`);
  }
}

sumSeconds(['50', '50', '49']);
