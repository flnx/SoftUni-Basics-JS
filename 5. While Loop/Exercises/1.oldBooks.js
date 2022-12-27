// function solve(input) {
//     let favBook = input[0];
//     let index = 1;
//     let correctBook = input[index];
//     let checked = 0;

//     while (correctBook !== "No More Books") {
//         let searchBook = correctBook;

//         if (searchBook === favBook) {
//             break;
//         } else {
//             checked++;
//         }

//         index++;
//         correctBook = input[index];
//     }

//     if (correctBook === favBook) {
//         console.log(`You checked ${checked} books and found it.`);
//     } else {
//         console.log(`The book you search is not here!`);
//         console.log(`You checked ${checked} books.`);
//     }

// }
// solve(["Troy",

// "Stronger",

// "Life Style",

// "Troy"])

function solve(input) {
  let favBook = input[0];
  let index = 1;
  let correctBook = input[index];
  let bookIsFound = false;

  while (correctBook !== 'No More Books') {
    let searchBook = correctBook;

    if (searchBook === favBook) {
      bookIsFound = true;
      break;
    }

    index++;
    correctBook = input[index];
  }

  if (bookIsFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}
solve(['Troy', 'Stronger', 'Life Style', 'Troy']);
