
// Generate a choice for the computer using if else
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);