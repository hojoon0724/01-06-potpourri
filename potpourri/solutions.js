console.log("yo");
// -----------------------------------------------------
// setAlarm
// -----------------------------------------------------

function setAlarm(employed, vacationing) {
  if (employed === true && vacationing === false) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

setAlarm(true, true);
setAlarm(false, false);
setAlarm(false, true);
setAlarm(true, false);

// -----------------------------------------------------
// oddNumberCount
// -----------------------------------------------------

function oddNumberCount(inputNumber) {
  const answer = Math.floor(inputNumber / 2);
  console.log(answer);
}

oddNumberCount(9);
oddNumberCount(32);
