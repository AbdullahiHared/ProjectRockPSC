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
    if (playerSelection != 5 || computerSelection != 5) {
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
        } else {
            if (computerPoints > playerPoints) {
                return 'You lose';
            } if (playerPoints > computerPoints) {
                return 'You win'
            } else {
                return 'The game is draw';
            }
        }
        computerResult = 0;
        playerResult = 0;

    }
    computerPoints.textContent = computerResult;
    playerPoints.textContent = playerResult;

}


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
rock.addEventListener('click', () => {
    playRound('rock')
})
paper.addEventListener('click', () => {
    playRound('paper')
});
scissor.addEventListener('click', () => {
    playRound('scissor')
})

