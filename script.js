// DOM Pointers
var startBtn = document.querySelector("#start");

// Global Variables of information the game tracks
var correct = 0;
var wrong = 0;
var time = 5;
var interval;
var currentQuestion = [];
var currentChoices = [];

// start timer
function startTimer() {
    interval = setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML= "Time Remaining<br/>" + time;
console.log(interval);
console.log(time);
        if ( time === 0){
            stopQuiz();
        }
    },1000);

}

function stopQuiz(){
    clearInterval(interval);
}

function showQuiz() {
    //Hide welecome element
    document.getElementById("welcome").style.display = "none";
    
    // Show Quiz, Time and Score
    document.getElementById("quiz").style.display = "block";
    document.getElementById("correct").innerHTML = "Correct:<br/>" + correct;
    document.querySelector("#wrong").innerHTML = "Wrong:<br/>" + wrong;
   
    startTimer();
    nextQuestion();
}


function checkAnswers(event) {
    console.log(event);
    var answerBtn = event.target;
    var index = answerBtn.getAttribute("data-answer");
    console.log(index)

}

function nextQuestion() {

    if(time === 0) {
        console.log("====== time=0 at nextQuestion======");
        return;
    }
     
    // Show a random question
    var elementQuestion = document.getElementById("question");
    currentQuestion = questions[Math.floor(Math.random()*questions.length)];
    elementQuestion.innerHTML = currentQuestion.question;

    // Show answers to the question
    currentChoices = currentQuestion.choices;
    for (var i = 0; i < currentChoices.length; i++) {
        // var attrOnClick = "checkAnswers(" + currentChoices[i] + ")";
        var elementChoice = document.getElementById("choice"+i);
        elementChoice.setAttribute("data-answer", currentChoices[i]);
        // elementChoice.setAttribute("click", attrOnClick);
        elementChoice.innerHTML = currentChoices[i];
        
    }

}


var questions = [{
    question: "Where is Diwali celebrated", 
    choices:["Russia", "India", "China", "Egypt"],
    answer: "India"
},{
    question: "When is Easter",
    choices:["Spring", "Summer", "Autumn", "Winter"],
    answer: "Spring"
},{
    question: "Which is not true about Holi",
    choices:["Colorful", "Full Moon", "Hindu Celebration", "Christian Holiday"],
    answer: "Christian Holiday"
},{
    question: "La Tomatina is celebrated in ",
    choices:["Argentina", "Spain", "Canada", "Austraila"],
    answer: "Spain"
}
];

// Listen for the start button to start.
startBtn.addEventListener("click", showQuiz);
