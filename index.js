let timmer = document.getElementById("time")
let second = 0;
let hours = 0;
let minutes = 0;
var clock;
function startWatch() {
    function stopWatchStart() {
        second++;
        if (second > 59) {
            second = 0;
            minutes++;
        }
        else if (minutes > 59) {
            second = 0;
            minutes = 0;
            hours++;
        }
        timmer.innerText = `00.${minutes.toString().padStart(2, '0')}.${second.toString().padStart(2, '0')}`
    }


    clock = setInterval(stopWatchStart, 1000);

}
function stopWatch() {
    clearInterval(clock)
}
function  resetwatch() {
    clearInterval(clock)
     second = 0;
     hours = 0;
     minutes = 0;
    timmer.innerHTML = "00:00:00"
}
