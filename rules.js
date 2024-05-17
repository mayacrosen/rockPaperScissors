// Where the actual game is played

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    const human = toLowerCase(prompt("Rock, paper, scissors, shoot!"));
    return human;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("You tie. Both chose " + humanChoice);
        return "tie";
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            return "computer";
        }
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            return "player";
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            return "player";
        }
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beat paper");
            return "computer";
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            return "computer";
        }
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            return "player";
        }
    }
}

function playGame () {
    
}

let humanScore = 0;
let computerScore = 0;


console.log(getComputerChoice())