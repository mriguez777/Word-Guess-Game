// JavaScript Document
var $ = function (id) {
    return document.getElementByID(id);
}

//Notes for myself: math.floor(this rounds down so we want to set this one number above the number of index choices available, dont forget they start with 0)
//math.random(this will return a random number but must be used with math.floor to return random intergers)

//Starting with my array for the game. I chose 10 different index choices.
var tarot = ["Fool", "Magician", "Emperor", "Chariot", "Hierophant", "Strength", "Justice", "Hanged Man", "Star", "Judgement"]

//Next I setup the choice variable with a random number formula to generate with index to use. 
var choice = Math.floor(Math.random() * 10)

//Setting another variable that gives me the answer of the random index
var answer = tarot[choice];

//variable to saving the length of the answer in variable "myLength". If I understand this corretly it means PC treats this as a game of guessing the length the user treats it as guessing a word as set with the win variable.
var myLength = answer.length;

//variable to display length, we need this for underscore appearance.
var display = [myLength];

//in order to win they have to guess the correct length
var win = myLength;

//this is creating another array which stores the "tarot index" choosen and seperates each letter into another index
var letters = answer.split('');

//numer of attempts left 
var attemptsLeft = 5;

//this is allows us to hide the text
var output = "";

//what is obtained from the users input
var userLetter = "";


var setup = function () {
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_";
        output = output + display[i]
    }
    document.getElementById("tarot").innerHTML = output;
    output = "";
}

var submit = function () {
    output = "";
    userLetter = $("letter").value;
    $("letter").value = "";

    for (var c = 0; c < answer.length; c++) {
        alert(letters[c]);
        if (userLetter.toUpperCase() == leters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + dislay[c] + " ";
    }

}

document.getElementById("tarot").innerHTML = output;
output = "";
attemptsLeft--;

if (win < 1) {
    document.getElementById("guesses").innerHTML ="YOU WIN!"
}
else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML ="YOU LOSE!"
}
else {
    document.getElementById("guesses").innerHTML ="You have" + attemptsLeft + "guesses left";
}

window.onload = function() {
    setup();
    this.$("submit").onclick = submit;
}



