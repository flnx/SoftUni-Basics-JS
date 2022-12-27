// World swimming record

function worldSwimmingRecord(input) {
  let record = Number(input[0]);
  let distance = Number(input[1]);
  let distancePerSec = Number(input[2]);

  let slow = Math.floor(distance / 15) * 12.5;

  let personalStats = distance * distancePerSec + slow;
  let needed = Math.abs(record - personalStats);

  if (personalStats < record) {
    console.log(
      `Yes, he succeeded! The new world record is ${personalStats.toFixed(2)} seconds.`
    );
  } else {
    console.log(`No, he failed! He was ${needed.toFixed(2)} seconds slower.`);
  }
}

worldSwimmingRecord(['55555.67', '3017', '5.03']);
