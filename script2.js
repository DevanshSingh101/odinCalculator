const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
const display = document.querySelector('.calcDisplay');
const display_p = document.createElement('p');
let operatorClicked = 0;
let operator = '';
let a = '';
let b = '';
let op = '';


display.appendChild(display_p); 

//create numbers
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

const boxAll = document.querySelectorAll('.box');
console.log(boxAll);

boxAll.forEach(
(item)=>{
   
    
    item.onclick = ()=>{

    let id = item.getAttribute('id');

    //append if number
    
    //handlenumber
    //if no operator clicked append
    //if operator is clicked store in variable
    //if operator is clicked and number is clicked then clear and get new number
    //if operator is clicked is true and another operator is clicked evaluated number is a

    //set operator clicked true and then if number is clicked clear and append
    //if operator clicked again then evaluate and print evaluated value

  

    
    

   
}

})

function handle_input() {

    if (operatorClicked === 0){

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(id)){

            display_p.innerHTML += id;
            // console.log('Clicked');
            }

        else{

            a = display_p.innerHTML;
            operatorClicked = 1;     

        }
    }else {

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(id)){
            
            display_p.innerHTML += id;
            // console.log('Clicked');
            }

        else{

            a = display_p.innerHTML;
            operatorClicked = 1;             
        }
    }

}



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

function evaluate(){

disVal = document.querySelectorAll('.calcDisplay > p');
let eqn = [];
disVal.forEach((item)=>{
 eqn += item.innerHTML;
})



console.log(eqn);

}



