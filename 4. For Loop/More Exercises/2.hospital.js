function solve(input) {
  let index = 0;
  let period = Number(input[index]);
  index++;

  let sendToAnotherHospital = 0;
  let treatedPatients = 0;
  let doctors = 7;

  for (let i = 1; i <= period; i++) {
    let patientsPerDay = Number(input[index]);
    index++;

    if (i % 3 === 0 && sendToAnotherHospital > treatedPatients) {
      doctors += 1;
    }

    if (patientsPerDay > doctors) {
      treatedPatients += doctors;
      sendToAnotherHospital += patientsPerDay - doctors;
    } else if (patientsPerDay <= doctors) {
      treatedPatients += patientsPerDay;
    }
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${sendToAnotherHospital}.`);
}

solve(['6', '25', '25', '25', '25', '25', '2']);

// solve(["4", "7", "27", "9", "1"])
