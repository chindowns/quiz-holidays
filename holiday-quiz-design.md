## DOM Design
Will use Bootstrap
<Wrapper class=container>
    <header border 5px a lighter shade of the dark orange background and white text>
        <h1 >Holiday Quiz
        <h2 >How important are holidays to you
    <hr>
    <sectoin #quiz>
        <h3 #instructions> 1st page is the rules.  You have 1 minute to answer as many questions as you can.  We count how many right answer you get.
                for each answer you get wrong, we decrement your time by 10 seconds.
        <h3 #question></h3>
        <answers #choices class buttons> <button id="btn0"><span id=choice>1 orange clickable box per answer. </answers>
        <h2 #results display none></h2>
    <hr>
    <footer row flex boxes with each item in a colored box>  <countdown>TIME COUNTDOWN         <correct-answers> CORRECT ANSWERS       <wrong-answers> WRONG ANSWERS

## Logic behind the 
### Set variables
    var iCurrent = 0 ############ this is the index of the Current Question
    var iAnswers = 0 ######### this is the index for the Answers
    var selAnswer; this is the value of the selected answer
    var correctAnswers = 0 ####### this the score 
    var wrongAnswers = 0
    var countDown = 60 ######## count down timer starting at 60 seconds
    var t 
    var selectQuery #quiz
    var selectQuery #instructions
    var selectQuery #question
    var selectQuery #answers
    var selectQuery #countdown
    var selectQuery #correct-answers
    var selectQuery #wrong-answers

### Question Array is an array of Objects with properties of question, choices, answer
questions

### End of Game Results
Hide #instructions, #question, #choices
Display Questions Right
        Questions Wrong
Start again refresh DOM

### Start the quiz

#### 1 Hide instruction
instructions.setAttribute(display:none;)

#### 2 Start Game
start timer
    if countDown reaches 0 { clear screen and display End of Game results}
    
    Display 1st question to element ID question
        var element = document.getElementById("question")
        element.innerHTML = questions[iCurrent].question;


    foreach choices index, display
        var element = document.getElementById("choices")
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);


##### Guess
guess(id, guess) ############# id is = btn + i and guess is equal to choices[i]
    var buttonEl = document.getElementById(id);
    buttonEl.onclick = function() {
        quiz.guess(guess);
    }



### Questions
questions will go to the top
{question: "Where is the main celebration of Diwali",
choices:["Russia", "India", "China", "Egypt"],
answer: "b"}

{question: "When is Easter celebrated?",
choices: "Spring", "Summer", "Autumn", "Winter"},
answer: "a"}

Holi


La Tomatina


Passover


Hanukkah


Kwanzaa


New Year


Lunar New Year


Mardi Gras


Basanth


Christmas


O-Bon


Ramadan


Memorial Day


Labor Day


Day of the Dead


Dragon Boat Festival


Boxing Day


Thanksgiving


Tomb Sweeping


July 4th


St Patrick's Day


Canada Day


Ching Ming Festival
