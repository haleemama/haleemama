let lower = document.querySelector('#lowercount');
let add = document.querySelector('#addcount');
let num = document.querySelector('#number');


let number = 0;

 add.addEventListener("click",()=>{
     if (number < 50)  {
    number++;
    updateDisplay();
     }
}) ;

lower.addEventListener("click",()=>{
    if (number > 0)   {
    number--;
    updateDisplay();
    }
}) ; 

function updateDisplay(){
 num.innerHTML = number;
};
