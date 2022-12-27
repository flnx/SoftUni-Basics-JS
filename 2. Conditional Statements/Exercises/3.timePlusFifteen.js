// Time + 15 Minutes

function timePlusFifteenMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let plusFifteen = 15;

  let hoursFormula = hours * 60 + (minutes + plusFifteen);
  let totalHours = Math.floor(hoursFormula / 60);
  let minutesFormula = hoursFormula % 60;

  if (totalHours > 23) {
    totalHours = totalHours - 24;
  }

  if (minutesFormula < 10) {
    console.log(`${totalHours}:0${minutesFormula}`);
  } else {
    console.log(`${totalHours}:${minutesFormula}`);
  }
}

timePlusFifteenMinutes(['2', '30']);
