const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
const display = document.querySelector('.calcDisplay');
const display_p = document.createElement('p');
let operatorClicked = 0;
let operator = '';
let a = 0;
let num1 ='';
let num2 = '';
let op = '';
display.appendChild(display_p); 

createNumbers();
const boxAll = document.querySelectorAll('.box');
console.log(boxAll);

// //managing input
boxAll.forEach(
(item)=>{ item.onclick = ()=>{

   let id = item.getAttribute('id');

   if (isNumber(id) == 1){
     //case 1 operator is not clicked
     if(operatorClicked == 0){
        //Type in display
        display_p.innerHTML += id;

        
     }
     //case 2 operator is clicked
     else{

        num1 = display_p.innerHTML;
        display_p.innerHTML = '';

        
     }
   
    }
    else{

        operator = id;
        
        if(operatorClicked == 0){
            //Type in display
            display_p.innerHTML += id;
    
            
         }
         //case 2 operator is clicked
         else{
    
            num1 = display_p.innerHTML;
            display_p.innerHTML = '';
    
            
         }


    }

}})



function isNumber (val){
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(val)){
           return 1;
        } else{return 0;}   
}


function createNumbers(){

    function createBox(something){
    
        let hori = document.createElement('div');    
        hori.className = 'hori';
        buttonGrid.appendChild(hori);
    
        for(let x = 0; x < 3; x++){
            
        let box = document.createElement('div');
        box.className = 'box';
        box.style.zIndex = 2;
        let text = document.createElement('p');
        hori.appendChild(box);
        box.appendChild(text);
        text.innerHTML = something[x];
        box.id = something[x];
    
        }
    
    }
    
    for(let i = 0; i<3; i++){

        // algo = box number = ix + a where a = default and each loop 1 default = i+1
        //this gives the number at a box in order 1 2 3...    
        
        let hori = document.createElement('div');    
        hori.className = 'hori';
        buttonGrid.appendChild(hori);
        let k = 1;
    
    
        for(let x = 1; x <= 3; x++){
            
            let box = document.createElement('div');
            box.className = 'box';
            box.style.zIndex = 2;
            let text = document.createElement('p');
            hori.appendChild(box);
            box.appendChild(text);
            text.innerHTML = a + k;
            box.id = a + k;
            k+=1;    
        }
    
        a+=3;
    }
    
    
    createBox(['0', '+', '-']);
    createBox(['X', '/', '=']);
    
    }