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

// Select a choice for the human
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");

    if (!choice) {
        alert("You must make a choice! Please restart.");
        return null;
    }

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

// Set the game logic
function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    // playRound OUTSIDE the loop
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice){
            return "draw";
        }
        else if (humanChoice === "paper" && computerChoice === "rock"){        
            return "human";
        }  
        else if (humanChoice === "rock" && computerChoice === "scissors"){
            return "human";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper"){
            return "human";
        }
        else {
            return "computer";
        }
    }

    // 5 rounds
    for (let i = 0; i < 5; i++){

        const humanSelection = getHumanChoice();
        if (humanSelection === null) return; // stop game if cancelled

        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
            alert(`Human wins this round!\nScore: ${humanScore} - ${computerScore}`);
        } 
        else if (result === "computer") {
            computerScore++;
            alert(`Computer wins this round!\nScore: ${humanScore} - ${computerScore}`);
        } 
        else {
            alert(`Round Draw!\nScore: ${humanScore} - ${computerScore}`);
        }
    }

    // Final result
    if (humanScore > computerScore) {
        alert(`Final Winner: Human! (${humanScore} - ${computerScore})`);
    } else if (computerScore > humanScore) {
        alert(`Final Winner: Computer! (${humanScore} - ${computerScore})`);
    } else {
        alert(`Final Result: Draw! (${humanScore} - ${computerScore})`);
    }
}

playGame();