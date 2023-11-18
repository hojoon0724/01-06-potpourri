console.log("yo");

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
