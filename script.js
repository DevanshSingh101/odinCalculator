const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
const boxAll = document.querySelectorAll('.box');
const display = document.querySelector('.calcDisplay');
let a = 0;

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
        let text = document.createElement('p');
        hori.appendChild(box);
        box.appendChild(text);
        // let p = document.querySelector('.box > p');
        
        text.innerHTML = a + k;
        box.id = a + k;
        console.log(a+k);
        k+=1;

    }

    a+=3;
}


createBox(['0', '+', '-']);
createBox(['X', '/', '=']);

boxAll.forEach(
(item)=>{
   
    let id = box_.getAttribute(id);
    item.onclick = ()=>{

    if (id in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', 'X', '/']){
    item.innerHTML += id;
    console.log('Clicked');

    }
}

})




function createBox(something){
    
    let hori = document.createElement('div');    
    hori.className = 'hori';
    buttonGrid.appendChild(hori);

    for(let x = 0; x < 3; x++){
        
    let box = document.createElement('div');
    box.className = 'box';
    let text = document.createElement('p');
    hori.appendChild(box);
    box.appendChild(text);
    text.innerHTML = something[x];
    box.id = something[x];

    }

   
    


}