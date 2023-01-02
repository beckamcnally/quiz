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
var leaderBoardContainer = document.getElementById("leaderBoardContainer")
var clear = document.getElementById("clear")
var again = document.getElementById("again")

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

var leaderBoardArray = [
    {
        initials: "",
        score: "",
    }
]
var currentQ = "";
var questIndex = 0;
var time = questionArray.length * 30;
var endTime = "";
var userAns = "";
var score = "";

// Function 1 - start the clock, hide intro and unhide the questions
function beginGame(){
    intro.setAttribute("class", "hide");
    endTime = setInterval(workingClock, 1000);
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
        gameOver.removeAttribute("class"); // removed hide
        finalScore.textContent = time; // removed var s
        //moved clock.setAttribute("class", "hidden"); to after clearInter
        clearInterval(endTime);  
        clock.setAttribute("class", "hidden");
        // score = score + s // added var s here and var score at the top so that I am declaring on the global scope
        // makes it so that someone can not get a negative score
        if (time < 0)
        finalScore.textContent = "0";


}

//Function 2 - get a question from the array, and the create the buttons for my array of choices
function getQuestions() {

    // for (; questIndex < questionArray.length; questIndex++){ // when I add this line it console logs all index numbers but only display the last one. I tried using event.stopPropagation() and event.stopDefault() but said its not a function // when I do this I also have to takeout the if statement in the if answer statement 

    var currentQuest = questionArray[questIndex]; 
    currentQ = currentQuest;
    question.textContent = currentQ.question; 
    ansContainer.innerHTML = ""; 

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
return currentQ; // return makes the whole function a question
}
console.log(currentQ)
// listens to the answer buttons and determines if they are correct or not
ansContainer.addEventListener("click",function getAnswer (event) {
    var clickedAns = event.target 
    userAns = clickedAns
    
    // if (userAns.textContent === currentQ.answer)
    if (clickedAns.value !== questionArray[questIndex].answer) {

        rightWrong.textContent = "Wrong!";
        ansContainer.innerHTML = "";
        question.innerHTML = "";
        time = time -20; // Manuel also said you get a buzzer when he was introing 
        counter.textContent = time;






    } else {
rightWrong.textContent = "Correct!";
        ansContainer.innerHTML = "";
        question.innerHTML = "";


    }

    questIndex++;

    if (time <= 0 || questIndex >= 4) {
        endGame()
    } else {
        console
        showNextQuestion()
    }
        
    //     if (questIndex >= 4){
    //         showNextQuestion()
    //     } else {
    //         endGame()
    //     }

    //   } else {

    //     if (questIndex >= 4){
    //         endGame()
    //     } else {
    //         showNextQuestion()
    //     }
    //   }// 
});
 

// this generates next question
function showNextQuestion () {
    questIndex++; // progresses the index by one so that it gens the next question
    getQuestions() 
}

// this displays the leaderboard and 
function leaderBoard() {
    var userInitials = ints.value.trim()
    intro.setAttribute("class", "hide"); 
    scoreBoard.removeAttribute("class", "hide"); 
    gameOver.setAttribute("class", "hide");

    if (userInitials !== ""){
        var leaderBoardArray = JSON.parse(localStorage.getItem("leaderBoardArray")) || [];

        var newScore = {
        scoreProp: time,
        initials: userInitials,
    }
    leaderBoardArray.push(newScore); 
    localStorage.setItem("leaderBoardArray", JSON.stringify(leaderBoardArray))

    leaderBoardArray.sort(function(a,b){
        return b.scoreProp - a.scoreProp;
    })
    
    for (var i = 0; i < leaderBoardArray.length; i++){
        var lbcline = document.createElement("li")
        lbcline.textContent = leaderBoardArray[i].initials + "-" + leaderBoardArray[i].scoreProp;
        leaderBoardContainer.appendChild(lbcline)
    }

    } 


    
// =========
    console.log(leaderBoardArray)
    console.log(score, ints.value)

    // leaderBoardArray[0].score.push(score)
    // leaderBoardArray[0].initials.push(ints.value) said is not a function
    // local storage makes its own object but only holds the two values as the one string what I want to do is push? the values into the objectarray AS A NEW OBJECT IN THe array and then save that new value as string in local storage and then and the retrieve it and print that 
    // localStorage.setItem("Initials", ints.value)
    // localStorage.getItem("Initials")
    // localStorage.setItem("Score", score)
    // localStorage.getItem("Score")
    
    
    
    // will let it read it as a string and then we will need to take the info out by
   
    // var leaderBoardArray_deserialized = JSON.parse(localStorage.getItem("leaderBoardArray"))
    // leaderBoardContainer.innerHTML = leaderBoardArray_deserialized
//  Jerome says that if you want to use and array that you will need to stingify it on the way in and parse it on the way out.   

        
        
    
    

} 
console.log(localStorage)


function beginAgain(){
    intro.removeAttribute("class", "hide");
    scoreBoard.setAttribute("class", "hide");
    beginGame()
}

function clearStorage(){
    localStorage.clear()
    location.reload()
}

clear.addEventListener("click", clearStorage)
highLink.addEventListener("click", leaderBoard)
again.addEventListener("click", beginAgain)
submitInt.addEventListener("click", leaderBoard)
startBtn.addEventListener("click", beginGame)