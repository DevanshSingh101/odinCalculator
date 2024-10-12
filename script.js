const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
const display = document.querySelector('.calcDisplay');
const display_p = document.createElement('p');
let operatorClicked = 0;
let operator = '';
let a = 0;
let num1 = '';
let num2 = '';
let op = '';
let operator_list = ['+', '-', '/', 'X'];
display.appendChild(display_p); 

createNumbers();
const boxAll = document.querySelectorAll('.box');
console.log(boxAll);

// //managing input
boxAll.forEach(
(item)=>{ item.onclick = ()=>{

   let id = item.getAttribute('id');

   if(isNumber(id))

    {
    
        display_p.innerHTML += id;
        if(operatorClicked)
        {
            if(operator_list.includes(display_p.innerHTML)){
                display_p.innerHTML = '';
            }
            num2+=id;
        }
        else
        {
            num1 +=id
        }
   } else
   {

        display_p.innerHTML ='';
        display_p.innerHTML +=id;

        if(id == 'AC'){
            display_p.innerHTML ='';
            num1 = '';
            num2 = '';
            operator = '';
        }
        

        if(operatorClicked)
        {
            if(id == '='){
                display_p.innerHTML = evaluate(num1, num2, operator); 
                num1= display_p.innerHTML;
                num2 = '';
            }
            else{
                operator = id;
            }
        }
        else
        {
            operatorClicked = 1;
            operator = id;
        }
   }


   console.log([num1, num2, operator]);


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
    createBox(['', 'AC', ''])
    
    }



function evaluate(n1, n2, op){
    if(op == '+'){
        return eval(n1)+eval(n2);
    }
    if(op == '-'){
        return eval(n1)-eval(n2);
    }
    if(op == 'X'){
        return eval(n1)*eval(n2);
    }
    if(op == '/'){
        return eval(n1)/eval(n2);
    }
}