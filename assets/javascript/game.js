// JavaScript Document
var $ = fucntion (id) {
    return document.getElementByID(id);
}

//Notes for myself: math.floor(this rounds down so we want to set this one number above the number of index choices available, dont forget they start with 0)
//math.random(this will return a random number but must be used with math.floor to return random intergers)

//Starting with my array for the game. I chose 10 different index choices.
var tarot = ["Fool", "Magician", "Emperor", "Chariot", "Hierophant", "Strength", "Justice", "Hanged Man", "Star", "Judgement"]

//Next I setup the choice variable with a random number formula to generate with index to use. 
var choice = Math.floor(Math.random()*10)

//Setting another variable that gives me the answer of the random index
var answer = tarot[choice];

//variable to saving the length of the answer in variable "myLength".
var myLength = answer.length;

//variable to display length, we need this for underscore appearance.
var display=[myLength];

alert(answer);

