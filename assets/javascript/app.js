clockRunning = false;
// timer that starts at the start of the game and ends the game
function clockstart(t){
    clockRunning = true;
    createQuestions()
    var countdown = 60;
    countdown--;
    $("#timeRemain").text(countdown)
    if (countdown===0){
        gamestop()
    }
}
// series of questions with a multipule choice or true false answers where they can only pick one answer 
function createQuestions(){
    // question list  in random order
    // coordinating answers in random order  
}
// click event to record useranswer only one answer
$("#answer").on("click")

function gamestop(){
    alert("Times UP!")
    answerReveal()
}

// at the end of the game reveal the number of questions that players answer correctly and incorrectly 
function answerReveal(){
    //show correct answer vs user answer
}
clockstart();