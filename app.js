var milliSec = 0
var sec = 0
var min = 0
var htmlMilli = document.getElementById('milli-sec');
var htmlSec = document.getElementById('sec');
var htmlMin = document.getElementById('min');
var btn = document.getElementById('start')
var interval;


function start() {


    interval = setInterval(function () {
        milliSec++
        htmlMilli.innerHTML = milliSec
        if (milliSec == 100) {
            sec++
            htmlSec.innerHTML = sec
            milliSec = 0
        } else if (sec == 10) {
            min++
            htmlMin.innerHTML = min
            sec = 0
        }
    }, 10)
    btn.disabled = true
}


function stop() {
    clearInterval(interval)
    btn.disabled = false
}

function reset() {
    min = 0
    milliSec = 0
    sec = 0
    htmlMilli.innerHTML = milliSec
    htmlSec.innerHTML = sec
    htmlMin.innerHTML = min

}






var inpSec = document.getElementById('inpSec')
var inpMin = document.getElementById('inpMin')
var inpHour = document.getElementById('inpHour')

var timer = document.getElementById('timer')
var outputSec = document.getElementById('outTimeSec')
var outputMin = document.getElementById('outTimeMin')
var outputHour = document.getElementById('outTimeHour')


function timerStart() {

    if(inpSec.value == "".trim() && inpMin.value == "".trim() && inpHour.value == "".trim()){
        alert('enter value')
    }

    else{

        timer.style.display = 'block'
        timer.style.display = 'flex'
        timer.style.justifyContent = 'center'
    outputSec.innerHTML = inpSec.value;
    outputMin.innerHTML = inpMin.value;
    outputHour.innerHTML = inpHour.value;
    var timerSec = inpSec.value;
    var timerMin = inpMin.value;
    var timerHour = inpHour.value;






    setInterval(function () {
        timerSec--
        outputSec.innerHTML = timerSec
        if (timerSec == 0) {
            timerSec = 60
            timerMin--
            outputMin.innerHTML = timerMin
        }
        if (timerMin == 0) {
            timerMin.innerHTML = 60
            timerHour--
            outputHour.innerHTML = timerHour
        }
    }, 1000)



    inpSec.value = ""
    inpMin.value = ""
    inpHour.value = ""

}
}