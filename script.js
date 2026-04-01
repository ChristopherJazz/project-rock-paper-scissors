
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


// Select a choice for the human
let humanChoice = prompt("What is your choice?");

function getHumanChoice() {

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
      else {
        return prompt("Please make a correct choice and restart")
    }
}

console.log(humanChoice);