// Where the actual game is played
// Gets computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    computerChoiceDisplay.textContent = "Computer chooses: " + choices[index];
    return choices[index];
}


let humanScore = 0;
let computerScore = 0;

function updateScores() {
    score.textContent = "Human: " + humanScore + " Computer: " + computerScore;
}


function addRound(words) {
    const round = document.createElement("li");
    round.textContent = words;
    rounds.appendChild(round);
}


function clearRounds() {
    while (rounds.firstChild) {
        rounds.removeChild(rounds.lastChild);
    }
}


function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = this.id;

    if (humanChoice == computerChoice) {
        addRound("You tie. Both chose " + humanChoice);
        }
    if (humanChoice == "rock") {
        console.log("rock");
        if (computerChoice == "paper") {
            addRound("You lose! Paper beats rock");
            computerScore++;
            updateScores();
        }
        if (computerChoice == "scissors") {
            addRound("You win! Rock beats scissors");
            humanScore++;
            updateScores();
        }
        }

    if (humanChoice == "paper") {
        console.log("paper");
        if (computerChoice == "rock") {
            addRound("You win! Paper beats rock");
            humanScore++;
            updateScores();
        }
        if (computerChoice == "scissors") {
            addRound("You lose! Scissors beat paper");
            computerScore++;
            updateScores();
        }
    }
    if (humanChoice == "scissors") {
        console.log("scissors");
        if (computerChoice == "rock") {
            addRound("You lose! Rock beats scissors");
            computerScore++;
            updateScores();
        }
        if (computerChoice == "paper") {
            addRound("You win! Scissors beats paper");
            humanScore++;
            updateScores();
        }
    }
    if (humanScore >= 5 || computerScore >= 5) {
        console.log("reset");
        clearRounds();
        if (humanScore > computerScore) {
            computerChoiceDisplay.textContent = "You win! Computer is sad";
        }
        else {
            computerChoiceDisplay.textContent = "You lose. Computer is happy"
        }
        
    }
    
}


const score = document.querySelector("div");
const rounds = document.querySelector("ol");
const computerChoiceDisplay = document.querySelector("p");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
    
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);
