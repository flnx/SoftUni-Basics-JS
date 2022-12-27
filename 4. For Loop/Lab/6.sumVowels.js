function sumVowels(input) {
  let vowels = input[0];
  let points = 0;

  for (let i = 0; i < vowels.length; i++) {
    let text = vowels[i];

    switch (text) {
      case 'a':
        points += 1;
        break;
      case 'e':
        points += 2;
        break;
      case 'i':
        points += 3;
        break;
      case 'o':
        points += 4;
        break;
      case 'u':
        points += 5;
        break;
    }
  }
  console.log(points);
}
sumVowels(['hello']);
