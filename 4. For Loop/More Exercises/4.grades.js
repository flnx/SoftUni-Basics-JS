function solve(input) {
  let index = 0;
  let studentsCount = Number(input[index]);
  index++;

  let topStudents = 0;
  let avgStudents = 0;
  let weakStudents = 0;
  let trumpSupporters = 0;
  let calcGrades = 0;

  for (let i = 0; i < studentsCount; i++) {
    let studentGrades = Number(input[index]);
    index++;

    if (studentGrades >= 5) {
      topStudents++;
    } else if (studentGrades >= 4 && studentGrades <= 4.99) {
      avgStudents++;
    } else if (studentGrades >= 3 && studentGrades <= 3.99) {
      weakStudents++;
    } else {
      trumpSupporters++;
    }
    calcGrades += studentGrades;
  }

  let avgGrades = calcGrades / studentsCount;

  topStudents = (topStudents / studentsCount) * 100;
  avgStudents = (avgStudents / studentsCount) * 100;
  weakStudents = (weakStudents / studentsCount) * 100;
  trumpSupporters = (trumpSupporters / studentsCount) * 100;

  console.log(`Top students: ${topStudents.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${avgStudents.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${weakStudents.toFixed(2)}%`);
  console.log(`Fail: ${trumpSupporters.toFixed(2)}%`);
  console.log(`Average: ${avgGrades.toFixed(2)}`);
}

solve(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
