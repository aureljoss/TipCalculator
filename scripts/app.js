const bill=document.getElementById('bill');
const tipSelected=document.querySelector('.default-button');
const defaultTwenty=document.getElementById('twenty');
const custom=document.getElementById('custom');

const people=document.getElementById('people');

const tipAmount=document.getElementById('tip-amount').value;
const totalPerson=document.getElementById('total');

let billTotal=0;
let tipPercentage=0;
let peopleTotal=0;

// tipSelected.addEventListener('click',)

defaultTwenty.addEventListener('click',twenty);

const twenty=(bill){
    const calc=bill*0.2;

}

tipAmount.push('twenty');

console.log(twenty);