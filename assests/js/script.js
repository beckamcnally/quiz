var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")
var q6 = document.getElementById("q6")
var q7 = document.getElementById("q7")
var q8 = document.getElementById("q8")
var q9 = document.getElementById("q9")
var q10 = document.getElementById("q10")
var questionList = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var quest = ""
var clock = document.getElementById("clock")
var counter = document.getElementById("counter") 
var time = questionList.length * 20
var rightWrong = document.querySelectorAll("h3");
var intTimer = ""
  
//=====VARS above this line

// User clicks start quiz and code runs beginQuiz
document.getElementById("startbutton").addEventListener("click", beginQuiz)
// ======EVENTS above this line

// this function starts the game, gets a question, hides the intro, 
function beginQuiz() {
     questionPicker();
    
    document.getElementById("intro").style.display = "none"; // makes intro not visible 

    // took quest display line out and put in questionPicker

    timer();
    var interval = setInterval(timer,1000);
    interval = intTimer

    // a function that takes the selection made and sees if it is write or not and displays correct or wrong 
  //== took code and put in question picker for loop
    // a function that progresses to the next question and subtracts time if incorrect
}

    // this function is to randomly select a question
function questionPicker() {
  for (var i = 0; i < 5; i++){
    var randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];



    randomQuestion.setAttribute("style", "display: flex;"); 


    document.getElementById("listOfQuestions").addEventListener("click", function(event){
    var selection = event.target
    
    if (selection.matches(".correct")){
        
      rightWrong.forEach((par, index) => {
      par.textContent = "Correct!"
      }); 
      questionPicker()
      } else {
      rightWrong.forEach((par, index) => {
      par.textContent = "Wrong!" });
        }
      });
      

    
  return;
  }


}





// this function is going to start the timer 
 function timer() {
    document.getElementById("clock").style.visibility = "visible";
    time--;
    counter.textContent = time;  
}


// 4. user chooses answer by clicking on answer buttons or pressing corresponding letter key

//document.getElementById("final-score").style.display = "block"
// 5. wrong or correct if the displayed on screen under answers

// 6. steps 2 - 5 repeat until 5 questions have been answered or time runs out 
//     A. create a for loop that runs five times

// 7. once game is over display score (the amount of time left on the clock)

// 8. give user option to go back (back to beginning) or enter their initials with their score 
//     A. if user enters initials take them to score board where they then have the option to go back or clear score board 
document.getElementById("initial-button").addEventListener("click", submitInts)
function submitInts(){ //this is where I am going to need to use the local storage ????
    // how to capture the intls in a var
    document.getElementById("score-board").style.display = "block"
}

// 9. need an event listener for the high score link that unhides it when the link is clicked
document.getElementById("highLink").addEventListener("click", highScore)
function highScore() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("score-board").style.display = "block"
} // ?? it seems as though it has something to do with the fact that it has already been clicked???????? */
