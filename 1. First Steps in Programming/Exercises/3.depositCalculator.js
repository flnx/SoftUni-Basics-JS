// Deposit Calculator

function deposit(input) {
  let depositX = Number(input[0]); // 200lv
  let period = Number(input[1]); // 3 months
  let rate = Number(input[2]); // 5.7%

  let yearInterestRate = depositX * (rate / 100); // 200 * (5.7 / 100 = 5.7%) = 11.40lv
  let monthlyInterestRate = yearInterestRate / 12; // 11.40lv / 12 months = 0.95lv
  let total = monthlyInterestRate * period + depositX; // 0.95lv x 3 months + 200lv deposit = 202.85  // 2.85lv interest rate for 3 months

  console.log(total);
}
deposit(['200', '3', '5.7']);

// output: 202.85