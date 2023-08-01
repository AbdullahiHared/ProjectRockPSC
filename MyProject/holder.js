
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    // select a random value from choices
    let randomValue = Math.floor(Math.random() * choices.length);
    return choices[randomValue];
}
let playerResult = 0;
let computerResult = 0;
let result; 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerResult += 1;
        computerResult += 1;
        return "Equal points";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerResult += 1;
        return "you win, Rock beats Scissor";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerResult += 1;
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerResult += 1;
        return "You win!, Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerResult += 1;
        return "You lose! Scissor beats paper";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerResult += 1;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerResult += 1;
        return "You win, Scissor beats Paper";
    } else {
        return "The value is  invalid";
    }

}
/*
// Display the result by checking the conditions below
function resultOutput() {
    if (playerResult === computerResult) {
        result = "The game is draw the computer has " + computerResult + " points and the player has " + playerResult;
    } else if (playerResult >= computerResult) {
        result = "Congratulations !!! You have won with " + playerResult + " points and the computer has lost";
    } else if (playerResult <= computerResult) {
        result = "You have lost and the computer won with " + computerResult+ " points";
    } else {    
        console.log("There must me something wrong");
    }
    console.log(result)
}
/* function game() {
    playRound();
    // play the game 5 times and show the results. (loop the playRound function);
       for (let i = 0; i <= 4; i++) {
        const playerSelection = prompt("What is your guese?");
        const computerSelection = getComputerChoice();
        console.log((playRound(playerSelection, computerSelection)));
    }
}
//declare a new variable newValue to the game () to call it
const newValue = game(playRound);
console.log(newValue);
const results = resultOutput();
console.log(results); */


// Create a variable that asks the user for a value.
// Start the game with a function that returns a random value from "rock", "paper" or "Scissor"
// after that ask the user for an input
// console random string from the computer
// If user input is == random string you should output "play again" and continue
// If user input is == rock and random string == scissor, then output "You win" and quit
// If user input is == rock and random string == paper, then output "you lose!" and quit
// If user input is == paper and random string == rock, then output "you, win" and quit
// If user input is == paper and random string == scissor, then output "you lose" and quit
// If user input is ==  scissor and random string == rock, then output "you lose" and quit
// If user input is ==  scissor and random string == paper, then out "you win" and quit

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

rock.addEventListener('click', function(playRound) {
   console.log('rock is clicked') 
});
paper.addEventListener('click', function(playRound) {
    console.log('paper is clicked') 

});
scissor.addEventListener('click', function(playRound) {
    console.log(' is clicked') 

});

