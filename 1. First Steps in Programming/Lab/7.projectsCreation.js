function projectsCreation(input) {
  let architect = input[0];
  let projects = Number(input[1]);
  let sum = projects * 3;

  console.log(
    `The architect ${architect} will need ${sum} hours to complete ${projects} project/s.`
  );
}
projectsCreation(['George', '4']);

// output: The architect George will need 12 hours to complete 4 project/s.
