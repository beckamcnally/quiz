var intro = document.getElementById("intro")
var startBtn = document.getElementById("startbtn")
var questContainer = document.getElementById("questContainer")
var question = document.getElementById("question")
var ansContainer = document.getElementById("ansContainer")
var rightWrong = document.getElementById("rightWrong")
var clock = document.getElementById("clock")
var counter = document.getElementById("counter")
var ansContainer = document.getElementById("ansContainer")
var gameOver = document.getElementById("game-over")
var finalScore = document.getElementById("finalScore")
var submitInt = document.getElementById("submitInt") 
var ints = document.getElementById("ints")
var scoreBoard = document.getElementById("scoreBoard")
var clear = document.getElementById("clear")
var again = document.getElementById("again")
var leaderBoardInts = document.querySelectorAll(".leaderBoardInts")

var questionArray = [
    {
        question: "How do you link to an external JavaScript file in your HTML document?",
        choices: [
            "A. Add link tag in the head.", "B. After the HTML closing tag use a script tag.", 
            "C. Add a script tag at the end of your document just before the closing body tag for external JS.", 
            "D. Don't worry about adding it in the HTML document, just have it in the same folder as your index.HTML"],
        answer: "C. Add a script tag at the end of your document just before the closing body tag for external JS."
    },

    {
        question:"What is one way to assign a variable in JavaScript?",
        choices: [
            "A. variable = value", 
            "B. var = value", 
            "C. var === value", 
            "D. variable === value"],
        answer: "B. var = value"
    },

    {
        question:"Giving a variable value before defining is called _____.",
        choices: [
            "A. Propping", 
            "B. Scaffolding", 
            "C. Joisting", 
            "D. Hoisting"],
        answer: "D. Hoisting"
    },

    {
        question:"What are the seven primitive data types?",
        choices: [
            "A. string, smallint, bigint, boolean, undefined, symbol, and null", 
            "B. string, number, bigint(number), boolean, undefined, symbol, and null", 
            "C. string, smallint, bigint(number), boolean, undefined, symbol, and n/a", 
            "D. string, NaN, number, boolean, undefined, symbol, and null"],
        answer: "B. string, number, bigint(number), boolean, undefined, symbol, and null"
    },

    {
        question:"In order to display writing in the browser console you would use which of the following?",
        choices: [
            "A. console.log()", 
            "B. print.console()", 
            "C. innerHTML", 
            "D. document.write()"],
        answer: "A. console.log()"
    }, // could not get my other questions because needed to use code snippets in question
]

var questIndex = 0;
var time = questionArray.length * 20;
var endTime = "";
var userAns = "";

// Function 1 - start the clock, hide intro and unhide the questions
function beginGame(){
    intro.setAttribute("class", "hide");
    

    var interval = setInterval(workingClock, 1000);
    endTime = interval


        //ends game if clock gets to 0
        getQuestions();
    //else if there are no more questions capture time as score?
    
 
}



// function to define clock
function workingClock(){
    clock.removeAttribute("class", "hidden")
    time--;
    counter.textContent = time;
    
    if (time === 0 || questIndex > questionArray.length) {
         //ends game if clock gets to 0
         endGame()
    } //else if there are no more questions capture time as score?

    
}

function endGame(){
        questContainer.setAttribute("class", "hide");
        gameOver.removeAttribute("class", "hide");
        clock.setAttribute("class", "hidden");
        clearInterval(endTime);  
        finalScore.textContent = time;
        console.log(time)
        
}



//Function 2 - get a question from the array, and the create the buttons for my array of choices
function getQuestions() {
    var currentQ = questionArray[questIndex];
    question.textContent = currentQ.question;
    ansContainer.innerHTML = ""; // empty's the button field
    
// this for loop creates the button for each question
    for (var i = 0; i < currentQ.choices.length; i++) {
        questContainer.removeAttribute("class", "hide");
        var selection = currentQ.choices[i];
        var selectBtn = document.createElement ("button")
        selectBtn.setAttribute("class", "selection")
        selectBtn.setAttribute("value", selection);
        selectBtn.textContent = selection;
        ansContainer.appendChild(selectBtn);
}   
     
// listens to the answer buttons and determines if they are correct or not
ansContainer.addEventListener("click",function getAnswer (event) {
    var clickedAns = event.target 
    userAns = clickedAns
    finalScore.textContent = time;
        console.log(time)  
    

if (userAns.textContent === currentQ.answer){
        rightWrong.textContent = "Correct!";
        ansContainer.innerHTML = "";
        question.innerHTML = "";
        if (questIndex > questionArray.length){
            endGame()
        } else {
            showNextQuestion()
        }

      } else {
        rightWrong.textContent = "Wrong!";
        console.log("wrong")
        ansContainer.innerHTML = "";
        question.innerHTML = "";
        time = time -20;
        counter.textContent = time;
        if (questIndex > questionArray.length){
            endGame()
        } else {
            showNextQuestion()
        }

      }
});
// function timeDeduction() {
//     time - 20;
//     counter.textContent = time;
// }

function showNextQuestion () {
    questIndex++;
    console.log(questIndex)
    getQuestions()
    console.log("next quest!!!")
}

} 
function leaderBoard (){
    
    scoreBoard.removeAttribute("class", "hide");
    gameOver.setAttribute("class", "hide");

    localStorage.setItem("Initials", ints.value)
    //localStorage.setItem("Score", )
    localStorage.getItem("Initials")

    leadIndex = 0 

    // forEach( leaderBoardInts =>  {
    //     leaderBoardInts.textContent.localStorage.getItem("Initials")
    // });
}

function beginAgain(){
    location.reload()
}
    // if (i === -1){
    //     finalScore.textContent = time;
    //     endGame();
    // };
again.addEventListener("click", beginGame)
submitInt.addEventListener("click", leaderBoard)
startBtn.addEventListener("click", beginGame)