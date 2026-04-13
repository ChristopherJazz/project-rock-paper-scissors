// Score state
let humanScore = 0;
let computerScore = 0;

// DOM elements
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

const pickRock = document.getElementById("rock");
const pickPaper = document.getElementById("paper");
const pickScissors = document.getElementById("scissors");

// Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Game logic
function playRound(human, computer) {
  if (human === computer) return "draw";

  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    return "human";
  }

  return "computer";
}

// Handle one round
function handleRound(humanChoice) {
  // Stop if game already finished
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  // Update score
  if (result === "human") {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (result === "computer") {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  } else {
    resultDiv.textContent = `Draw! You both chose ${humanChoice}`;
  }

  // Update UI score
  scoreDiv.textContent = `Score: ${humanScore} - ${computerScore}`;

  // Check winner (Best of 5)
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "🎉 You won the game!";
    } else {
      resultDiv.textContent = "💻 Computer wins the game!";
    }
  }
}

// Event listeners
pickRock.addEventListener("click", () => handleRound("rock"));
pickPaper.addEventListener("click", () => handleRound("paper"));
pickScissors.addEventListener("click", () => handleRound("scissors"));