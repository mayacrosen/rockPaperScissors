// Where the actual game is played

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

console.log(getComputerChoice())