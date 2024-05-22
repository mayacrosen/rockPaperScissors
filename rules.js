// Where the actual game is played

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    const human = (prompt("Rock, paper, scissors, shoot!")).toLowerCase();
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
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("You tie. Both chose " + humanChoice);
            return "tie";
        }
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
                return "computer";
            }
            if (computerChoice == "scissors") {
                console.log("You win! Rock beats scissors");
                humanScore++;
                return "player";
            }
        }
        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats rock");
                humanScore++;
                return "player";
            }
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beat paper");
                computerScore++;
                return "computer";
            }
        }
        if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
                return "computer";
            }
            if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
                return "player";
            }
        }
    }

    for (let i=0; i<5; i++){
        console.log("Round " + (i+1) + ":")
        let computerMove = getComputerChoice();
        let humanMove = getHumanChoice();
        console.log("You chose: " + humanMove + ". The computer chose: " + computerMove);
        playRound(humanMove, computerMove);
        console.log("Human score: " + humanScore + ". Computer score: " + computerScore + "\n");
    }
    
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }

    else if (computerScore > humanScore) {
        console.log("You lost the game");
    }

    else if (computerScore == humanScore) {
        console.log("You tie")
    }
}

playGame();

