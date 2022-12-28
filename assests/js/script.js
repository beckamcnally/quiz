var q1 = document.getElementById("q1")

// 1. User clicks start quiz
document.getElementById("startbutton").addEventListener("click", beginQuiz)
//     A.clock begins when quiz starts
//         i. event listener click start quiz
// 2. have a question randomly chosen from array of questions
//     A. use random() to sort through array of question
// 3. when question is generated display on screen 
//      A. use data ?? to hide and reveal questions 
//      B. Clock is also revealed
 
function beginQuiz () {
document.getElementById("intro").style.display = "none"; // makes intro not visible // tried to turn this into a global var so I could reuse intro as a var like I did for q1 and it stopped working????
q1.setAttribute("style", "display: flex;"); // makes the q1 visible 
document.getElementById("clock").style.visibility = "visible"
}


// 4. user chooses answer by clicking on answer buttons or pressing corresponding letter key
//     A. use 

// 5. wrong or correct if the displayed on screen under answers

// 6. steps 2 - 5 repeat until 5 questions have been answered or time runs out 
//     A. create a for loop that runs five times

// 7. once game is over display score (the amount of time left on the clock)

// 8. give user option to go back (back to beginning) or enter their initials with their score 
//     A. if user enters initials take them to score board where they then have the option to go back or clear score board 
//document.getElementById("initail-button").addEventListener("click", submitInts())
/* function submitInts(){ //this is where I am going to need to use the local storage ????
    document.getElementById("score-board").style.display = "block"
}

// 9. need an event listener for the high score link that unhides it when the link is clicked
/*document.getElementById("score-board").addEventListener("click", highScore())
function highScore() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("score-board").style.display = "block"
} // ?? it seems as though it has something to do with the fact that it has already been clicked???????? */
