// variables declared for functions saving answer responses to local storage
const recentCorrectAnswers = localStorage.getItem("count");
const recentAnswersFromClient = localStorage.getItem("correctAnswers");
const recentTimeStamp = localStorage.getItem("quizTime");

const highScoresArray = [];

function addHighScore() {
    let scoreObject = {totalCorrect: 0, answersGiven: "", timeCompleted: ""};
    scoreObject.totalCorrect = recentCorrectAnswers;
    scoreObject.answersGiven = recentAnswersFromClient;
    scoreObject.timeCompleted = recentTimeStamp;

    highScoresArray.push(scoreObject);

};