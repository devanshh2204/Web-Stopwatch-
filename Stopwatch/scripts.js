let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    document.getElementById('display').innerHTML = "00:00:00";
    running = false;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds;
}
