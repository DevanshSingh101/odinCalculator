const buttonGrid = document.querySelector("#grid");
const hori_ = document.querySelector('.hori');
const box_ = document.querySelector('.box');
let defaultVal = 1;

for(let i = 0; i<3; i++){
    // algo = box number = ix + a where a = default and each loop 1 default = i+1
    //this gives the number at a box in order 1 2 3...
    defaultVal = i + 1; // used as and numbering algorith
    let a = defaultVal;
    
    let hori = document.createElement('div');    
    hori.className = 'hori';
    buttonGrid.appendChild(hori);


    for(let x = 1; x <= 3; x++){
        let box = document.createElement('div');
        box.className = 'box';
        let text = document.createElement('p');
        hori.appendChild(box);
        box.appendChild(text);
        let p = document.querySelector('.box > p');
        p.innerHTML = i*x + a;

    }
}