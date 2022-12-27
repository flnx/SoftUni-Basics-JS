function solve(input) {
  let index = 0;
  let movieOrFinish = input[index];
  index++;
  let standardTickets = 0;
  let kidTickets = 0;
  let studentTickets = 0;

  while (movieOrFinish !== 'Finish') {
    let movieName = movieOrFinish;
    let freeSpace = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let tickets = 0;

    while (command !== 'End') {
      let ticketType = command;
      tickets++;

      if (freeSpace <= tickets) {
        break;
      }

      switch (ticketType) {
        case 'standard':
          standardTickets++;
          break;
        case 'kid':
          kidTickets++;
          break;
        case 'student':
          studentTickets++;
          break;
      }

      command = input[index];
      index++;
    }

    let calcFreeSpace = (tickets / freeSpace) * 100;
    console.log(`${movieName} - ${calcFreeSpace.toFixed(2)}% full.`);
    movieOrFinish = input[index];
    index++;
  }

  let sumTickets = standardTickets + kidTickets + studentTickets;
  studentTickets = (studentTickets / sumTickets) * 100;
  kidTickets = (kidTickets / sumTickets) * 100;
  standardTickets = (standardTickets / sumTickets) * 100;
  console.log(`Total tickets: ${sumTickets}`);
  console.log(`${studentTickets.toFixed(2)}% student tickets.`);
  console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
  console.log(`${kidTickets.toFixed(2)}% kids tickets.`);
}

solve([
  'The Matrix',

  '20',

  'student',

  'standard',

  'kid',

  'kid',

  'student',

  'student',

  'standard',

  'student',

  'End',

  'The Green Mile',

  '17',

  'student',

  'standard',

  'standard',

  'student',

  'standard',

  'student',

  'End',

  'Amadeus',

  '3',

  'standard',

  'standard',

  'standard',

  'Finish',
]);
