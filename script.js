
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
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");

    if (!choice) {
        alert("You must make a choice! Please restart.");
        return null; // Stop execution if user cancels
    }

    // Convert input to lowercase to avoid case issues
    choice = choice.toLowerCase();

    // Check if input is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Recursively ask again until valid
    }
}

// Use the function
let humanChoice = getHumanChoice();
console.log("Human chose:", humanChoice);