clockRunning = false;
var number = 10;
var countdown;
// timer that starts at the start of the game and ends the game
function clockstart(){
    clearInterval(countdown);
    clockRunning = true;
    createQuestions();
    countdown = setInterval(decrement, 1000);
console.log(countdown)
}

function decrement(){
    number--;
    $("#timeRemain").html("<h2>" + number + "</h2>")
    if (number === 0){
        gamestop()
    }
}

function gamestop(){
    alert("Times UP!");
    clearInterval(countdown);
    answerReveal();
}
// series of questions with a multipule choice or true false answers where they can only pick one answer 
function createQuestions(){

    // question list  in random order
    // coordinating answers in random order  
}
// click event to record useranswer only one answer
// $("#answer").on("click")


// at the end of the game reveal the number of questions that players answer correctly and incorrectly 
function answerReveal(){
    //show correct answer vs user answer
}
clockstart();
