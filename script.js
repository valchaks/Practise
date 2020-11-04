let button_1 = document.getElementById("button1");
let container = document.querySelector('.container')
let counters = document.getElementById('counters');
let misseded = document.getElementById('missed');
let reset = document.getElementById('button2');
var counter = 0;
var missed = 0;
var test;
var starter = 0;




function randomize () {
    var top = Math.floor((Math.random() * 360) + 70);
    var left = Math.floor((Math.random() * 280) + 70);
    console.log('top - ' + top + ' left - ' + left);
    button_1.style.top = top + 'px';
    button_1.style.left = left + 'px';
}

reset.onclick = function (){
    counters.innerHTML = 0;
    misseded.innerHTML = 0;
    button_1.style.top = 0 + 'px';
    button_1.style.left = 0 + 'px';
    
}

container.onclick = function () {
    button_1.onclick = function () {
    randomize();
    test = true;
    counter++;
    counters.innerHTML = counter; 
}
    if(test == false){
        missed++;
    }
    misseded.innerHTML = missed;
    test = false;
}
