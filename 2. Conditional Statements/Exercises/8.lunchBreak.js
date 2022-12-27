// Lunch Break

function lunchBreak(input) {
  let tvShow = input[0];
  let episodeTime = Number(input[1]);
  let breakTime = Number(input[2]);

  let lunchBreak = breakTime / 8;
  let leisure = breakTime / 4;

  let timeLeft = breakTime - lunchBreak - leisure;
  let needed = Math.abs(timeLeft - episodeTime);

  if (timeLeft >= episodeTime) {
    console.log(
      `You have enough time to watch ${tvShow} and left with ${Math.ceil(
        needed
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${tvShow}, you need ${Math.ceil(
        needed
      )} more minutes.`
    );
  }
}

lunchBreak(['Game of Thrones', '60', '96']);
