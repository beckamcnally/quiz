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
var highLink =  document.getElementById("highLink")
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
var currentQ = "";
var questIndex = 0;
var time = questionArray.length * 30;
var endTime = "";
var userAns = "";

// Function 1 - start the clock, hide intro and unhide the questions
function beginGame(){
    intro.setAttribute("class", "hide");
    var interval = setInterval(workingClock, 1000);
    endTime = interval
    getQuestions();
}

// function to define clock
function workingClock(){
    clock.removeAttribute("class", "hidden")
    time--;
    counter.textContent = time;
    //ends game if clock gets to 0
    if (time === 0) {  
         endGame()
    }   
}


// Ends game and takes us to final score screen where user can enter their initials
function endGame(){
        questContainer.setAttribute("class", "hide");
        gameOver.removeAttribute("class", "hide");
        clock.setAttribute("class", "hidden");
        clearInterval(endTime);  
        finalScore.textContent = time;
        console.log(time) 
        
        // makes it so that someone can not get a negative score
        if (time < 0 || questIndex > questionArray.length)
        finalScore.textContent = "0";
}




//Function 2 - get a question from the array, and the create the buttons for my array of choices
function getQuestions() {

    // for (; questIndex < questionArray.length; questIndex++){ // when I add this line it console logs all index numbers but only display the last one. I tried using event.stopPropagation() and event.stopDefault() but said its not a function // when I do this I also have to takeout the if statement in the if answer statement 

    var currentQuest = questionArray[questIndex]; 
    currentQ = currentQuest;
    question.textContent = currentQ.question; // after the fourth question it is telling me that it cant read undefined properties
    ansContainer.innerHTML = ""; // empty's the button field
    console.log("Index number " + questIndex); //when I first click start this is logging 0 however when I click the fist answer this is logging 1 when I click the second answer though it logs both two and three ?? It only lets you get three questions because of that

    // this for loop creates the button for each question - it is inside the getQuestions function because I tried to make it its own function and their were too many variables that we undefined
    for (var i = 0; i < currentQ.choices.length; i++) {
        questContainer.removeAttribute("class", "hide");
        var selection = currentQ.choices[i];
        var selectBtn = document.createElement ("button")
        selectBtn.setAttribute("class", "selection")
        selectBtn.setAttribute("value", selection);
        selectBtn.textContent = selection;
        ansContainer.appendChild(selectBtn);
   }
return currentQ;
}

// listens to the answer buttons and determines if they are correct or not
ansContainer.addEventListener("click",function getAnswer (event) {
    var clickedAns = event.target 
    userAns = clickedAns
    
    if (userAns.textContent === currentQ.answer){
        rightWrong.textContent = "Correct!";
        ansContainer.innerHTML = "";
        question.innerHTML = "";
        console.log("the questIndex at answer level is " + questIndex)
        console.log("Correct!")
        console.log(questIndex >= 4)// this is still reading false after the 
        if (questIndex >= 4){
            console.log("Q Right are you trying to endgame?")
            endGame()
        } else {
            showNextQuestion()
            console.log("....")
        }

      } else {
        rightWrong.textContent = "Wrong!";
        ansContainer.innerHTML = "";
        question.innerHTML = "";
        time = time -20;
        counter.textContent = time;
        console.log("the questIndex at answer level is " + questIndex) 
        console.log(questIndex >= 4)

        if (questIndex >= 4){
            endGame()
            console.log("Q Wrong are you trying to endgame?")
        } else {
            showNextQuestion()
        }
      }
});
 

// this generates next question
function showNextQuestion () {
    questIndex++; // progresses the index by one so that it gens the next question
    getQuestions() //?? maybe because I am calling the function with in the function    
    console.log("that was question " + questIndex)
}

function leaderBoard() {
    intro.setAttribute("class", "hide");
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

highLink.addEventListener("click", leaderBoard)
again.addEventListener("click", beginGame)
submitInt.addEventListener("click", leaderBoard)
startBtn.addEventListener("click", beginGame)