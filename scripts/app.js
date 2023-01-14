const bill = document.getElementById("bill");
const tipSelected = document.querySelector(".default-button");
const defaultTwenty = document.getElementById("twenty");
const custom = document.getElementById("custom");

const tipAmount = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total");

let billTotal = 0;
let tipPercentage = 0;
let peopleTotal = 0;

const twenty = () => {
      // Selecting the input element and get its value 
    var tipAmount = document.getElementById("bill").value;
    const people = document.getElementById("people").value;
    document.getElementById("tip-amount").value=((tipAmount*0.2)/people);
  
    // Displaying the value
    alert(inputVal);}
