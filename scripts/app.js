const bill = document.getElementById("bill");
const tipSelected = document.querySelector(".default-button");
const defaultTwenty = document.getElementById("twenty");
const custom = document.getElementById("custom");

const tipAmount = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total");

let billTotal = 0;
let tipPercentage = 0;
let peopleTotal = 0;

const twentyTip = () => {
  // Selecting the input elements and get their value
  var bill = document.getElementById("bill").value;
  const people = document.getElementById("people").value;

  // Calculates tip and total per person
  var tipAmount = (bill * 0.2) / people;
  var totalPerson = tipAmount + bill / people;

  // Pushes the calculated amounts to inputs
  document.getElementById("tip-amount").value = tipAmount;
  document.getElementById("total").value = totalPerson;
};
