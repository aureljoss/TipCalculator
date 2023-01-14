const tipSelected = document.querySelector(".default-button");
const defaultTwenty = document.getElementById("twenty");
const custom = document.getElementById("custom");

let billTotal = 0;
let tipPercentage = 0;
let peopleTotal = 0;

function totals(tip) {
  // Selecting the input elements and get their value
  const bill = document.getElementById("bill").value;
  const people = document.getElementById("people").value;

  // Calculates tip and total per person
  const tipCalc = tip / 100;
  const tipAmount = (bill * tipCalc) / people;
  const totalPerson = tipAmount + bill / people;

  // Pushes the calculated amounts to inputs
  document.getElementById("tip-amount").value = "$" + tipAmount.toFixed(2);
  document.getElementById("total").value = "$" + totalPerson.toFixed(2);

  // Displays warning for invalid inputs
  if (people < 1) {
    document.getElementById("warnings").innerHTML = "Can't be 0";
    document.getElementById("tip-amount").value = "$0.00";
    document.getElementById("total").value = "$0.00";
    document.getElementById("people").style.border = "2px solid red";
  } else if (people > 10) {
    document.getElementById("warnings").innerHTML = "Can't be more than 10";
    document.getElementById("tip-amount").value = "$0.00";
    document.getElementById("total").value = "$0.00";
    document.getElementById("people").style.border = "2px solid red";
  }
  if (bill < 1) {
    document.getElementById("billWarning").innerHTML = "Can't be 0";
    document.getElementById("tip-amount").value = "$0.00";
    document.getElementById("total").value = "$0.00";
    document.getElementById("bill").style.border = "2px solid red";
  } else if (bill > 1000) {
    document.getElementById("billWarning").innerHTML =
      "Can't be more than $1,000";
    document.getElementById("tip-amount").value = "$0.00";
    document.getElementById("total").value = "$0.00";
    document.getElementById("bill").style.border = "2px solid red";
  }
}
