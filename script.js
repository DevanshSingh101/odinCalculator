const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
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
        console.log(a+k);
        k+=1;

    }

    a+=3;
}