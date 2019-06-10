clockRunning = false;
var number = 10;
var countdown;
var userScore = 0;
var userWrong = 0;
var userAnswer = [];
var questionIndex = 0;

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
    giveResults();
}
// series of questions with a multipule choice or true false answers where they can only pick one answer 

var myQuestions = [
    {question: "Who is the strongest?",
    answers:{
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi"
    },
    correctAnswer: "Waluigi"
},
{question: "Who is the strongest?",
answers:{
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi"
},
correctAnswer: "Waluigi"
},
{question: "Who is the strongest?",
answers:{
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi"
},
correctAnswer: "Waluigi"
},
];


function createTrivia(){
    $("#trivia").empty();
    for(var i = 0; i < myQuestions.length; i++){
        console.log(myQuestions[i])
        // with time come back and make a for in to make this more effcient
        var q = $("<p>");
        q.addClass("question");
        q.attr("data-name", myQuestions[i].question);
        q.text(myQuestions[i].question);
        $("#trivia").append(q);

        var a = $("<button id=' "+ i + "a'>")
        a.addClass("answer")
        a.text(myQuestions[i].answers.a);
        $("#trivia").append(a);
        
        var b = $("<button id=' " + i + "b'>")
        b.addClass("answer")
        b.text(myQuestions[i].answers.b);
        $("#trivia").append(b);
        
        var c = $("<button id =' " + i + "c'>")
        c.addClass("answer")
        c.text(myQuestions[i].answers.c);
        $("#trivia").append(c);
    }
}



// at the end of the game reveal the number of questions that players answer correctly and incorrectly 

clockstart();

$("#trivia").on("click", "button", function(){
    userAnswer.push($(this).text());
    console.log(userAnswer);
    questionIndex ++;
})
function giveResults(){
//show correct answer vs user answer
for(i = 0; i<myQuestions.length; i++){

    if( userAnswer[i] === myQuestions[i].correctAnswer){
        userScore++;
    }else{
        userWrong++;
    }
}
 alert("Right: " + userScore + "\n\nWrong: " + userWrong) 
 }