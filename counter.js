var seconds = 59; // seconds for HTML
var foo; // variable for clearInterval() function

document.getElementById("timer").innerHTML = "60s"

function redirect() {
    window.location = 'index.html';
}

function updateSecs() {
    document.getElementById("timer").innerHTML = seconds+"s";
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();