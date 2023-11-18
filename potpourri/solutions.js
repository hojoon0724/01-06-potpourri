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

// -----------------------------------------------------
// disemvoweling trolls
// -----------------------------------------------------

function trollsBeGone(input) {
  const removal = "aeiouAEIOU";
  let removalArray = removal.split("");
  let inputArray = input.split("");
  for (i = 0; i < removalArray.length; i++) {
    inputArray = inputArray.filter((out) => out !== removalArray[i]);
  }
  const answer = inputArray.join("");
  console.log(answer);
}

trollsBeGone("this is an input");

// -----------------------------------------------------
// bank account summary
// -----------------------------------------------------

const bankInfo = {
  savings: 600,
  checking: 80,
  moneyMarket: 20,
  creditCard: -2000,
};

function bankAccountSummary(account) {
  let sumAll = account.savings + account.checking + account.moneyMarket + account.creditCard;
  return sumAll;
}

bankAccountSummary(bankInfo);

let bankTotal = bankAccountSummary(bankInfo);

console.log(bankTotal);

function inTheRed() {
  if (bankTotal < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(inTheRed());
