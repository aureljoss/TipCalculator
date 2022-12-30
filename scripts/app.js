const bill=document.getElementById('bill');
const tipSelected=document.querySelector('.default-button');
const defaultTwenty=document.getElementById('twenty');
const custom=document.getElementById('custom');

const people=document.getElementById('people');

const tipAmount=document.getElementById('tip-amount');
const totalPerson=document.getElementById('total');

// tipSelected.addEventListener('click',)

defaultTwenty.addEventListener('click',twenty);

// const calculateTip=()=>{
//     if 
// }

const twenty=(){
    return twentyTip=(bill*20)%100;
}

console.log(twenty);