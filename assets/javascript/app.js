clockRunning = false;
var number = 60;
var countdown;
var userScore = 0;
var userWrong = 0;
var userAnswer = [];
var questionIndex = 0;
var clicked = true;

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
    {question: "1) What character said 'Live Long and Prosper?",
    answers:{
        a: "Superman",
        b: "The Terminator",
        c: "Spock",
        d: "Batman"
    },
    correctAnswer: "Spock"
},
{question: "2) What is the name of Batman's butler?",
answers:{
    a: "Alfred",
    b: "James",
    c: "Fred",
    d: "George"
},
correctAnswer: "Alfred"
},
{question: "3) What city is Jim Morrison buried in?",
answers:{
    a: "New York",
    b: "L. A.",
    c: "London",
    d: "Paris"
},
correctAnswer: "Paris"
},
{question: "4) What is the name of Jack Skellington's pet dog?",
answers:{
    a: "Lil Jack",
    b: "Frank",
    c: "Squee",
    d: "Zero"
},
correctAnswer: "Zero"
},
{question: "5) Which Roman emperor supposedly fiddled while Rome burned?",
answers:{
    a: "Tiberius",
    b: "Augustus",
    c: "Nero",
    d: "Otho"
},
correctAnswer: "Nero"
},
{question: "6) What is the total number of dots on a pair of dice?",
answers:{
    a: "21",
    b: "42",
    c: "34",
    d: "41"
},
correctAnswer: "42"
},
{question: "7) Which artist said they would eat thier wife when she died?",
answers:{
    a: "Dali",
    b: "Monet",
    c: "Picasso",
    d: "Pollock"
},
correctAnswer: "Dali"
},
{question: "8) Where is the smallest bone in the body?",
answers:{
    a: "Nose",
    b: "Foot",
    c: "Ear",
    d: "Hand"
},
correctAnswer: "Ear"
},
{question: "9) Who lived at 221B, Baker Street, London?",
answers:{
    a: "Dracula",
    b: "Dr. Jeckel",
    c: "Sherlock Holmes",
    d: "Ebenezer Scrooge"
},
correctAnswer: "Sherlock Holmes"
},
{question: "10) According to Greek Mythology who was the first woman on earth?",
answers:{
    a: "Helen",
    b: "Fred",
    c: "Pandora",
    d: "Penelope"
},
correctAnswer: "Pandora"
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

        var d = $("<button id =' " + i + "d'>")
        d.addClass("answer")
        d.text(myQuestions[i].answers.d);
        $("#trivia").append(d);
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