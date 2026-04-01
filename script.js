// Generate a choice for the computer using if else
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1; //Generate a number from 1-3

//Return a choice by using the random generated number
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

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



// Set the game logic

function playGame () {

    // Start the game with 0 score
    let humanScore = 0;
    let computerScore = 0;

    // Declare the player score variable
    function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice){
    	return alert("Draw"); // Sets draw whenever the human choose same as the computer
    }

    // Check the choices and win condition
    else if (humanChoice === "paper" && computerChoice === "rock"){
        return alert ("Human wins")
    }  
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        return alert ("Human wins")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        return alert ("Human wins")
    }

    // Always computer wins whenever above choices are not applicable
    else {
        return alert ("Computer wins")
    }
}

// Sets the arguments for human and computer choice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Execute the function
playRound(humanSelection, computerSelection);

    
    
}

playGame();

