function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    // select a random value from choices
    let randomValue = Math.floor(Math.random() * choices.length);
    return choices[randomValue];
}


let playerResult = 0;
let computerResult = 0;

const result = document.querySelector(".result");
const computerPoints = document.querySelector('.computerPoints');
const playerPoints = document.querySelector('.playerPoints');
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        playerResult += 1;
        playerPoints.textContent = playerResult;

        computerResult += 1;
        computerPoints.textContent = computerResult
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerResult += 1;
        playerPoints.textContent = playerResult;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerResult += 1;
        computerPoints.textContent = computerResult;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerResult += 1;
        playerPoints.textContent = playerResult;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerResult += 1;
        computerPoints.textContent = computerResult;

    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerResult += 1;
        computerPoints.textContent = computerResult;

    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerResult += 1;
        playerPoints.textContent = playerResult;
    }
    // check for game competition and reset the scores
    if (playerResult === 5 || computerResult === 5) {
        if (playerResult > computerResult) {
            result.textContent = "Yay You have won and defeated the human race enemy";
        } else if (computerResult > playerResult) {
            result.textContent = 'Defeated';
            result.computedStyleMap.color = 'red';
            result.style.fontSize = '2rem';
        } else {
            result.textContent = 'The game is draw';
        }
        computerResult = 0;
        playerResult = 0;
        computerPoints.textContent = computerResult;
        playerPoints.textContent = playerResult;
    }

}

function resetGame() {
    playerResult = 0;
    computerResult = 0;
    playerPoints.textContent = playerResult;
    computerPoints.textContent = computerResult;
    result.textContent = ""; // Clear the result message
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
rock.addEventListener('click', () => {
    playRound('rock');
})
paper.addEventListener('click', () => {
   playRound('paper');
});
scissor.addEventListener('click', () => {
  playRound('scissor');

})

const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', resetGame);
