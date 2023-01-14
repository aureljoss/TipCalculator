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
  const tipAmount = (bill * tip) / people;
  const totalPerson = tipAmount + bill / people;

  // Pushes the calculated amounts to inputs
  document.getElementById("tip-amount").value = "$" + tipAmount.toFixed(2);
  document.getElementById("total").value = "$" + totalPerson.toFixed(2);
}
