var timeE1 = document.querySelector('.time');
var startE1 = document.querySelector('.start');
var stopE1 = document.querySelector('.stop');
var resetE1 = document.querySelector('.reset');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function printTime(){
    let currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    timeE1.innerHTML = elapsedTime;
}

startE1.addEventListener('click',  function(){
    startTime = new Date().getTime();
    timeInterval = setInterval(printTime, 1);
})

stopE1.addEventListener('click', function(){
    clearInterval(timeInterval);
})

resetE1.addEventListener('click', function(){
    clearInterval(timeInterval);
    timeE1.innerHTML = '00:00:00';
    elapsedTime = 0;
    startTime = 0;
})



