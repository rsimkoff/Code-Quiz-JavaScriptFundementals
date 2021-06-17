let answersFromClient = [];
let currentQuestion = 0;
// list of questions below scripting through for each page 
const testQuestions = [{question: 'What language is considered the skeleton of a webpage',
answers: {a: 'css', b: 'javascript', c: 'python', d: 'html'},
correctAnswer: 'html'},
{question: 'What is the correct syntax for referring to an external script called xxx.js?',
answers: {a: '<script href="xxx.js">', b: '<script src="xxx.js">', c: '<script name="xxx.js">', d: '<javascript src="xxx.js">'},
correctAnswer: '<script src="xxx.js">'},
{question: 'How do you write "Hello World" in an alert box?',
answers: {a: 'alertBox("Hello World");', b: 'msgBox("Hello World");', c: 'msg("Hello World");', d: 'alert("Hello World");'},
correctAnswer: 'alert("Hello World");'},
{question: 'How do you log a message in the console?',
answers: {a: 'function:', b: 'function console.consolelog();', c: 'function = console.log();', d: 'funct log.console();'},
correctAnswer: 'function console.log("message");'},
{question: 'How does a FOR loop start?',
answers: {a: 'for i = 1 to 5', b: 'for (i <= 5; i++)', c: 'for (i =0; i <= 5; i++)', d: 'for (i = 0; i <= 5)'},
correctAnswer: 'for (i =0; i <= 5; i++)'},
{question: 'What is an Array?',
answers: {a: 'special variable, which can hold more than one value at a time', b: 'a string', c: 'a linked list', d: 'a function'},
correctAnswer: 'special variable, which can hold more than one value at a time'},
{question: 'What is the correct way to write an array?',
answers: {a: 'var colors = ["black", "purple", "pink"]', b: 'var colors = 1 = ("black"), 2 = ("purple"), 3 = ("pink")', c: 'var colors = "black", "purple", "pink"', d: 'var colors = (1:"black", 2:"purple", 3:"pink")'},
correctAnswer: 'var colors = ["black", "purple", "pink"]'},
{question: 'What is an async function?',
answers: {a: 'an array', b: 'a variable', c: 'a function declared with the async keyword, and the await keyword is permitted within them', d: 'a function that runs immediatly on script being called.'},
correctAnswer: 'a function declared with the async keyword, and the await keyword is permitted within them'}];

let questionText = document.getElementById("questionText");
// options appendined to html elements for each question
let option1 = document.getElementById("option1");
let option1Label = document.getElementById("option1Label");
let option2 = document.getElementById("option2");
let option2Label = document.getElementById("option2Label");
let option3 = document.getElementById("option3");
let option3Label = document.getElementById("option3Label");
let option4 = document.getElementById("option4");
let option4Label = document.getElementById("option4Label");

const buttonArray = [option1, option2, option3, option4];
// page buttons assigned by ID
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");

prevButton.addEventListener("click", handlePrevQuestion);
nextButton.addEventListener("click", handleNextQuestion);

// prevButton.onclick = handlePrevQuestion;
// nextButton.onclick = handleNextQuestion;
updateQuestion();

function updateQuestion() {
    //grab question text from array
    questionText.textContent = testQuestions[currentQuestion].question;
    //grab answer possibilities from array
    option1.setAttribute("value", testQuestions[currentQuestion].answers.a);
    option1Label.textContent = "a: " + option1.getAttribute("value");
    option2.setAttribute("value", testQuestions[currentQuestion].answers.b);
    option2Label.textContent = "b: " + option2.getAttribute("value");
    option3.setAttribute("value", testQuestions[currentQuestion].answers.c);
    option3Label.textContent = "c: " + option3.getAttribute("value");
    option4.setAttribute("value", testQuestions[currentQuestion].answers.d);
    option4Label.textContent = "d: " + option4.getAttribute("value");

    if (currentQuestion === 0) {
        hideElement(prevButton);
    }
    else showElement(prevButton);

    if (currentQuestion !== (testQuestions.length - 1)) {
        hideElement(submitButton);
    };

    if (currentQuestion === (testQuestions.length - 1)) {
        hideElement(nextButton);
        showElement(submitButton);
    }
    else showElement(nextButton);

    //reset radio buttons
    buttonArray.forEach((opt, index) => {
       if (opt.value === answersFromClient[currentQuestion]) {
           opt.checked = true;
        }
        else {
            opt.checked = false;
        };
    });


};

function getCurrentAnswer() {
    const selection = buttonArray.find(opt => opt.checked);
    if (selection) {
        return selection.value;
    };
    return undefined;
};

function handleNextQuestion() {
    answersFromClient[currentQuestion] = getCurrentAnswer();
    currentQuestion++;
    updateQuestion();

};

function handlePrevQuestion() {
    answersFromClient[currentQuestion] = getCurrentAnswer();
    currentQuestion--;
    updateQuestion();

};

function evaluateResponses() {
    answersFromClient[currentQuestion] = getCurrentAnswer();
    let evaluatedResponses = {boolValues: [], count: 0, timeOfQuiz: {}};
    for (var i = 0; i < answersFromClient.length; i++) {
        if (answersFromClient[i] === (testQuestions[i].correctAnswer)) {
            evaluatedResponses.boolValues[i] = true;
            evaluatedResponses.count++;
        } else evaluatedResponses.boolValues[i] = false;
    };
    let generatedDateTime = new Date();
    evaluatedResponses.timeOfQuiz = generatedDateTime.toLocaleString();
    console.log(evaluatedResponses);
    localStorage.setItem("correctAnswers", evaluatedResponses.boolValues);
    localStorage.setItem("count", evaluatedResponses.count);
    localStorage.setItem("quizTime", evaluatedResponses.timeOfQuiz);
    return evaluatedResponses;
};

function submitResponses() {
    evaluateResponses();
    showOnly(quizResults);
};

submitButton.addEventListener("click", submitResponses);