
let devide = document.getElementById('devide');
let result = document.querySelector('.number');
let multiple = document.getElementById('multiple');

let multiBy = function() {
    let firstNum = document.getElementById('firstNum').value;
    let lastNum = document.getElementById('lNum').value;
    result.innerHTML = firstNum * lastNum; 
};

multiple.addEventListener("click",multiBy);


let devideBy = function() {
    let firstNum = document.getElementById('firstNum').value;
    let lastNum = document.getElementById('lNum').value;
    result.innerHTML = firstNum / lastNum;
}

 devide.addEventListener("click",devideBy);
 

 







