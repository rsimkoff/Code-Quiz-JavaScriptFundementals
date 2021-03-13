var scores = document.getElementById("view-scores");
var timer = document.getElementById("timer");
var scoresDiv = document.getElementById("scores-div");
var results = document.getElementById("results");
var choices = document.getElementById("choices");
var btnStart = document.getElementById("btn-start");
var questionsBox = document.getElementById("quiz-questions");

var secondsLeft = 60;
var currentQuestion = 0;
var setTime = secondsLeft;
var score = 0;

const questions = [
{  
    question: "Commonly used data types DO NOT include:",
    answers: [      
        "a: 1. strings",
        "b: 2. booleans",
        "c: 3. alerts",
        "d. 4. numbers"
    ],   
    correctAnswer: 3
},
{   
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        "a: 1. JavaScript",
        "b: 2. terminal/bash",
        "c: 3. for loops",
        "d: 4. console.log"
    ],
    correctAnswer: 4
},
{  
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [      
        "a: 1. numbers and strings",
        "b: 2. other arrays",
        "c: 3. booleans",
        "d: 4. all of the above"
    ],   
    correctAnswer: 4 
},    
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: [      
        "a: 1. commas",
        "b: 2. curly brackets",
        "c: 3. quotes",
        "d: 4. parentheses"
    ],   
    correctAnswer: 3    
},
{
    question: "The condition in an if / else statement is enclosed within ______.",
    answers: [      
        "a: 1. quotes",
        "b: 2. curly brackets",
        "c: 3. parentheses",
        "d: 4. square brackets"
    ],   
    correctAnswer: 3  
},    
];

newFunction();
btnStart.addEventListener("click", function(setTime){
    startTimer();
    getQuestion();
});

function newFunction() {
    window.debugger;
}

function startTimer(){
var timerInterval = setInterval(function(){
secondsLeft--;
timer.textContent = secondsLeft + "seconds left";
if(secondsLeft === 0) {
clearInterval(timerInterval);
sendMessege();
}
}, 1000);
}

function getQuestion(){
removeEventListener(btnStart);
questionsBox.innerHTML = `p${questions[currentQuestion].question}`
for (var i = 0; i < questions[currentQuestion].answers.length; i++){
console.log(questions[currentQuestion].answers[i])
var button = document.createElement("btn-start")
button.dataset.index = i;
button.innerHTML = questions[currentQuestion].answers[i];
button.addEventListener("click", checkAnswer);
choices.append(button);
};
};

function sendMessege() {
timer.textContent = "time is up!";
};
setTime;

function checkAnswer(e) {
console.log(e.target.dataset.index);
var selectedAnswerIdx =e.target.dataset.index
console.log(typeof selectedAnswerIdx);
if (questions[currentQuestion].correctAnswer == selectedAnswerIdx){
    console.log("correct")
    score += secondsLeft;
} 
else {
    score -= 10;
    secondsLeft = secondsLeft -10;
    console.log("incorrect")
}

if (currentQuestion === questions.question){
    return;
}   else{
    currentQuestion++
    getQuestion();    
    }
}

function resetAnswers(){
while (choices.firstChild) {
choices.removeChild(choices.firstChild);
};
};

const removeEventListener = (...els) => {
for (let el of els) el.remove();
};




