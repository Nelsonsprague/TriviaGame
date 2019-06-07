clockRunning = false;
var number = 10;
var countdown;

var resultsContain = document.getElementById('results');
// timer that starts at the start of the game and ends the game
function clockstart(){
    clearInterval(countdown);
    clockRunning = true;
    createTrivia();
    countdown = setInterval(decrement, 1000);
console.log(countdown)
}

function decrement(){
    $("#timeRemain").html("<h2>" + number + "</h2>")
    if (number === 0){
        gamestop()
    }
    number--;
}

function gamestop(){
    alert("Times UP!");
    clearInterval(countdown);
    showResults();
}
// series of questions with a multipule choice or true false answers where they can only pick one answer 
function createTrivia(){
    $("#trivia").empty();
}

                // var myQuestions = [
                //     {question: "Who is the strongest?",
                // answers:{
                //     a: "Superman",
                //     b: "The Terminator",
                //     c: "Waluigi"
                // },
                //   correctAnswer: "c"
                // },
                // {question: "Who is the strongest?",
                // answers:{
                //     a: "Superman",
                //     b: "The Terminator",
                //     c: "Waluigi"
                // },
                //   correctAnswer: "c"
                // },
                // {question: "Who is the strongest?",
                // answers:{
                //     a: "Superman",
                //     b: "The Terminator",
                //     c: "Waluigi"
                // },
                //   correctAnswer: "c"
                // },
                // ];
                //      for(var i = 0; i < myQuestions.length; i++){
                //          console.log(myQuestions[i])
                //      }
// $("#answer").on("click")


// at the end of the game reveal the number of questions that players answer correctly and incorrectly 
function showResults(){
    //show correct answer vs user answer
}
clockstart();
