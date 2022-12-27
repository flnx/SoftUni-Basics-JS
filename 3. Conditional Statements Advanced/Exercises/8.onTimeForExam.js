// on time for the exam
function examOnTime(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let examTime = examHour * 60 + examMinute;
  let arriveTime = arriveHour * 60 + arriveMinute;
  let diff = Math.abs(examTime - arriveTime);
  let h = Math.floor(diff / 60);
  let m = diff % 60;

  if (examTime < arriveTime) {
    console.log('Late');
  } else if (examTime - arriveTime <= 30 || arriveTime === examTime) {
    console.log('On time');
  } else if (examTime - arriveTime > 30) {
    console.log('Early');
  }

  if (examTime < arriveTime && diff <= 59) {
    console.log(`${diff} minutes after the start`);
  } else if (examTime > arriveTime && diff <= 59) {
    console.log(`${diff} minutes before the start`);
  } else if (examTime < arriveTime && diff >= 59) {
    if (m < 10) {
      console.log(`${h}:0${m} hours after the start`);
    } else {
      console.log(`${h}:${m} hours after the start`);
    }
  } else if (examTime > arriveTime && diff >= 59) {
    if (m < 10) {
      console.log(`${h}:0${m} hours before the start`);
    } else {
      console.log(`${h}:${m} hours before the start`);
    }
  }
}
examOnTime(['09', '00', '10', '30']);

function examOnTime(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let examTime = examHour * 60 + examMinute;
  let arriveTime = arriveHour * 60 + arriveMinute;
  let diff = Math.abs(examTime - arriveTime);
  let h = Math.floor(diff / 60);
  let m = diff % 60;

  if (examTime < arriveTime) {
    console.log('Late');
    if (diff >= 60) {
      if (m < 10) {
        console.log(`${h}:0${m} hours after the start`);
      } else {
        console.log(`${h}:${m} hours after the start`);
      }
    } else {
      console.log(`${diff} minutes after the start`);
    }
  } else if (examTime - arriveTime <= 30 || arriveTime === examTime) {
    console.log('On time');
    if (diff > 0) {
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log('Early');

    if (h > 0) {
      if (m < 10) {
        console.log(`${h}:0${m} hours before the start`);
      } else {
        console.log(`${h}:${m} hours before the start`);
      }
    } else {
      console.log(`${m} minutes before the start`);
    }
  }
}
examOnTime(['11', '00', '11', '00']);
