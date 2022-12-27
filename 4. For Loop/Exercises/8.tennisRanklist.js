function solve(input) {
  let index = 0;
  let countTournaments = Number(input[index]);
  index++;
  let startingPoints = Number(input[index]);
  index++;

  let points = 0;
  let wins = 0;

  for (let i = 0; i < countTournaments; i++) {
    let tournamentType = input[index];
    index++;
    let addPoints = 0;
    switch (tournamentType) {
      case 'W':
        addPoints += 2000;
        wins++;
        break;
      case 'F':
        addPoints += 1200;
        break;
      case 'SF':
        addPoints += 720;
        break;
    }
    points += addPoints;
  }

  let totalPoints = Math.floor(points + startingPoints);
  let averagePointsPerTournament = Math.floor(points / countTournaments);
  let winRate = (wins / countTournaments) * 100;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${averagePointsPerTournament}`);
  console.log(`${winRate.toFixed(2)}%`);
}

solve(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
