var hourNum = document.querySelector("#hr");
var minNum = document.querySelector("#min");
var secNum = document.querySelector("#sec");

function gettingTime() {
    var date = new Date();
    var hour = (date.getHours()<10?"0":"") + date.getHours();
    var min = (date.getMinutes()<10?"0":"") + date.getMinutes();
    var sec = (date.getSeconds()<10?"0":"") + date.getSeconds();

    showTime(hourNum, hour);
    showTime(minNum, min);
    showTime(secNum, sec);
}

function showTime(timeUnit, time) {
    timeUnit.innerHTML = time;
}

setInterval (gettingTime, 1000);