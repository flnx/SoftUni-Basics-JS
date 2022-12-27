// summer reading literature

function summerRead(input) {
  let pagesNumber = Number(input[0]); // 350 pages per book
  let pagesReadPerHour = Number(input[1]); // 20 pages read per hour
  let numberOfDays = Number(input[2]); // 30 days

  let calc = pagesNumber / pagesReadPerHour; // 350 pages / 20 pages per hour = 35 hours for a book
  let total = calc / numberOfDays; //   35 hours / 30 days = 1.16 hrs per day
  console.log(total);
}
summerRead(['700', '20', '30']);

// output: 1.1666666666666667