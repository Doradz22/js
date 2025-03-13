// Existing helper functions outside
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) return "rock";
    else if (randomNumber < 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors?");
    return choice;
}

// Main game function
function playGame() {
    // Declare score variables inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Move playRound inside playGame
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        // Display current scores after each round
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    // Call playRound exactly 5 times
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // Declare overall winner
    if (humanScore > computerScore) {
        console.log("🎉 You win the game! Final Score: " + humanScore + " - " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("💻 The computer wins the game! Final Score: " + computerScore + " - " + humanScore);
    } else {
        console.log("🤝 The game ends in a tie! Final Score: " + humanScore + " - " + computerScore);
    }
}

// Start the game
playGame();
