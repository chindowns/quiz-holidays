// DOM Pointers
var startBtn = document.querySelector("#start");
var elementQuiz = document.querySelector("#quiz");

// Global Variables of information the game tracks
var correct = 0;
var wrong = 0;
var time = 60;
var interval;
var currentQuestion = [];
var currentChoices = [];


// start timer
function startTimer() {
    interval = setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML= "Time Remaining<br/>" + time;
console.log("Remaing Time Is: " + time);
        if ( time <= 0){
            stopQuiz();
        }
    },1000);
}

function stopQuiz(){
    clearInterval(interval);
    elementQuiz.style.display = "none";
    showResults();
}

function showResults() {
    var elResults = document.getElementById("results-div");
    elResults.parentElement.style.display = "block";
    elResults.innerHTML = "GAME OVER"

}

function showQuiz() {
    //Hide welecome element
    document.getElementById("welcome").style.display = "none";
    
    // Show Quiz, Time and Score
    elementQuiz.style.display = "block";
   
    showScores();
    startTimer();
    nextQuestion();
}

function showScores (){
    document.getElementById("correct").innerHTML = "Correct:<br/>" + correct;
    document.querySelector("#wrong").innerHTML = "Wrong:<br/>" + wrong;

}

function checkAnswers(event) {
    console.log(event);
    var answerBtn = event.target;
    answerBtn.setAttribute("background", "darkorange");
    var answer = answerBtn.getAttribute("data-answer");
    console.log("========= Selected Answer ===========")
    console.log(answer)
    console.log("Correct Answer is ==== " + currentQuestion.answer);
    if (answer === currentQuestion.answer) {
        correct++;
    } else {
        wrong++;
        // take 5 seconds off the clock for a wrong answer
        time -= 5;
    }
    console.log("Correct Answers are ==== " + correct);
    console.log("Wrong Answers are ==== " + wrong);
    showScores();
    nextQuestion();
}

function nextQuestion() {

    currentQuestion = questions[Math.floor(Math.random()*questions.length)];

    var elQuestion = document.getElementById("question");
    elQuestion.innerHTML = currentQuestion.question;

    console.log("=============== Next Question ================");
    console.log(currentQuestion.question);

    // Show answers to the question
    currentChoices = currentQuestion.choices;
    for (var i = 0; i < currentChoices.length; i++) {
        var elementChoice = document.getElementById("choice"+i);
        elementChoice.setAttribute("data-answer", currentChoices[i]);
        // Clear button then display the choice
        elementChoice.innerHTML = "";
        elementChoice.innerHTML = currentChoices[i];
    }
}

// Quiz Questions
var questions = [{
    question: "Where is Diwali celebrated", 
    choices: ["Russia", "India", "China", "Egypt"],
    answer: "India"
},{
    question: "When is Easter",
    choices: ["Spring", "Summer", "Autumn", "Winter"],
    answer: "Spring"
},{
    question: "Which is not true about Holi",
    choices: ["Colorful", "Full Moon", "Hindu Celebration", "Christian Holiday"],
    answer: "Christian Holiday"
},{
    question: "La Tomatina is celebrated in ",
    choices: ["Argentina", "Spain", "Canada", "Austraila"],
    answer: "Spain"
},{
    question: "Passover occurs in",
    choices: ["Summer", "Winter", "Spring", "Fall"],
    answer: "Spring",
},{
    question: "Hanukkah is",
    choices: ["1 day", "expensive gifts", "in December", "Hindu holiday"],
    answer: "in December",
},{
    question: "Kwanzaa is",
    choices: ["1 day", "quite holiday", "Christian holiday", "African American"],
    answer: "an African American"
},{
    question: "New Year is",
    choices: ["only in USA", "has Fireworks", "on Dec. 25", "starts at noon"],
    answer: "has Fireworks"
},{
    question: "Lunar New Year",
    choices: ["celebrated across Asia", "on Feb 25", "predominantly Chinese", "minor holiday"],
    answer: "predominantly Chinese"
},{
    question:"What is Mardis Gras",
    choices: ["Fat Tuesday", "Skinny Wednesday", "Qiuet Family Time", "Summer Parade"],
    answer: "Fat Tuesday"
},{
    question:"What is 0-Bon",
    choices: ["Phillipino Holiday","Japanese Buddhist", "Mexican Celebraion","O'Canada"],
    answer: "Japanese Buddhist"
},{
    question:"Labor Day",
    choices: ["Remeber Pearl Harbor", "End of Summer", "Honors the Fortune 100", "Began 1600's"],
    answer: "End of Summer"
},{
    question:"Day of the Dead",
    choices: ["Celebrated May 5", "Canadian Holiday", "Greek Holiday", "Mexican Holiday"],
    answer: "Mexican Holiday"
},{
    question:"What is Ramadan",
    choices: ["Holy Month", "Single Day","Month of Feasts", "Started with Pilgrims"],
    answer: "Holy Month"
},{
    question:"Boxing Day",
    choices: ["Dec 26", "Day after Thanksgiving", "Friday before Easter", "Jan 2"],
    answer: "Dec 26"
}
];



// Listen for the start button to start.
startBtn.addEventListener("click", showQuiz);
