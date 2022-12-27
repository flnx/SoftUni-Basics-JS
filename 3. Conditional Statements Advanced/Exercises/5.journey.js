function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let cost = 0;

  if (budget <= 100) {
    switch (season) {
      case 'summer':
        cost = budget * 0.3;
        break;
      case 'winter':
        cost = budget * 0.7;
        break;
    }
    console.log(`Somewhere in Bulgaria`);
  } else if ((budget > 100) & (budget <= 1000)) {
    switch (season) {
      case 'summer':
        cost = budget * 0.4;
        break;
      case 'winter':
        cost = budget * 0.8;
        break;
    }
    console.log(`Somewhere in Balkans`);
  } else if (budget > 1000) {
    switch (season) {
      case 'summer':
      case 'winter':
        cost = budget * 0.9;
        break;
    }
    console.log(`Somewhere in Europe`);
  }

  if (budget > 1000) {
    console.log(`Hotel - ${cost.toFixed(2)}`);
  } else if (season === 'summer') {
    console.log(`Camp - ${cost.toFixed(2)}`);
  } else if (season === 'winter') {
    console.log(`Hotel - ${cost.toFixed(2)}`);
  }
}
journey(['1500', 'summer']);
