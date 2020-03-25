# quiz-holidays
This is a timed quiz game about the holidays.  Press START to clear the instructions and begin play.

You will be asked a random question about holidays.
For each question, you are given a choice of 4 answers. When the answer is correct it adds it to correct answers and gives you the next quetsion.  When the incorrect answer is selected, it adds it to your wrong score and takes 5 seconds off of the timer.

Answer as many correct as you can in 60 seconds.
When the game is over, it will clear the questions, letting you know the game is over leaving the score in the footer.

## Implementation
The application uses Javascript to minipulate the DOM and control the game play.
The quetsions use a randomizer to generate random questions.  If you play the game more than once, you should not receive the same question order.



The application is using Bootstrap for its responsiveness.  The buttons, color and spacing are coded in CSS/styles.css

## Site Picture

![Site](assets/images/screen-shot.jpg)


## Technologies Used
- HTML - use to make the game interface.
- CSS - styles were applied to ensure a fun, clean, responsive interface.
- JavaScript - Power the application using DOM manipulation and game functionality.
- Git - used for version control to track system changes.
- GitHub - used as the repository for Git version control
- Bootstrap - used for responsiveness

## Code Snippet
The JavaScript implements smaller functions to run specific actions when needed. A variable pointer using querySelector is only used when an element was expected to be used in multiple places.  The DOM manipulators mainly use 'getElementById'.

### Code Flow
1. JavaScript button listener executes function showQuiz which hides the Welcome DIV.
    --a. starts Scoreboard
    --b. starts Timer
    --c. start Questions
2. Timer counts down each second.  When it gets to Zero, it clears the game console and displays Game Over.
3. HTML now displays the Scoreboard, Timer and Questions.
    --a. User clicks on an answer which triggers an onclick event from the DOM sending the information to the function Check Answers.
4. Check Answers 
    --a. Sets the previously pressed button back to orange for Safari on iPad, etc.
    --b. if the selected Answer is equal to the Questions Answer, the game increases the Correct Score and goes to the next quesion.
    --c. if the Answer did not equal the Quetsions Answer, then the game increases the Wrong Score and takes 5 seconds off your timer.
    --d. Shows scores
    --e. Next Question
5. Next Question - randomly generates a new question from the array Questions. Each quetsion is an object in the array.

html
```
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
```

## Author Links
### Michael Downs
[LinkedIn](http://www.linkedin.com/in/michaeldownssj)  
[GitHub](https://chindowns.github.io/) 