// Where the actual game is played
// Gets computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}


let humanScore = 0;
let computerScore = 0;

function updateScores() {
    score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = this.id;

    if (humanChoice == computerChoice) {
        console.log("You tie. Both chose " + humanChoice);
        return "tie";
        }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
            updateScores();
            return "computer";
        }
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
            updateScores();
            return "player";
        }
        }

    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
            updateScores();
            return "player";
        }
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper");
            computerScore++;
            updateScores();
            return "computer";
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
            updateScores();
            return "computer";
        }
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
            updateScores();
            return "player";
        }
    }
}


const score = document.querySelector("div");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("scissors");
    
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
    
