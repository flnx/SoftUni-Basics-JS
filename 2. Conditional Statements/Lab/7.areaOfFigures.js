//Area of Figures

function areaOfFigures(input) {
  let shape = input[0];
  let area = 0;

  if (shape === 'square') {
    let side = Number(input[1]);
    area = side * side;
    console.log(area.toFixed(3));
  } else if (shape === 'rectangle') {
    let sideA = Number(input['2']);
    let sideB = Number(input['3']);
    area = sideA * sideB;
    console.log(area.toFixed(3));
  } else if (shape === 'circle') {
    let radius = Number(input['4']);
    let area = radius * radius * Math.PI;
    console.log(area.toFixed(3));
  } else if (shape === 'triangle') {
    let base = Number(input['5']);
    let height = Number(input['6']);
    let area = (base * height) / 2;
    console.log(area.toFixed(3));
  }
}

areaOfFigures(['triangle', '5', '7', '2.5', '6', '4.5', '20']);
