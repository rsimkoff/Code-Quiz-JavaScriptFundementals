// variables defined appending start active and results fintions by html IDs
const quizStart = document.getElementById("quizStart");
const quizActive = document.getElementById("quizActive");
const quizResults = document.getElementById("quizResults");

const elements = [quizStart, quizActive, quizResults];

//switches between css class for quix start page or quiz questions script

const showOnly = (elementToShow) => {
    elements.forEach(element => {
        if (element === elementToShow) {
            showElement(element);
        
        }
        else {
            hideElement(element);
        };
    })
};

// switches css class between start page and quiz cycle
const showElement = element => {
    element.classList.remove('hide');
    element.classList.add('show');
};

const hideElement = element => {
    element.classList.remove('show');
    element.classList.add('hide');
};

function quizStartButton() {
    showOnly(quizActive);
};

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", quizStartButton);
// timer function counting down from 10 mintues in seconds, attached to id hmtl element, does not affect user score.
function timerCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    timerCountdown(tenMinutes, display);
}