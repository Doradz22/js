// Declare and initialize score variables
let humanScore = 0;
let computerScore = 0;


// Function that randomly selects rock, paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.random(); // random number between 0 (inclusive) and 1 (exclusive)

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get the human player's choice
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors?");
    return choice;
}

// Test your function
console.log(getHumanChoice());

// Test your function
console.log(getComputerChoice());

// Play a single round of rock-paper-scissors
function playRound(humanChoice, computerChoice) {
    // Ensure human choice is case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } 
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    // Display current scores
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}
// temporary test to play one round
let humanChoice = getHumanChoice(); 
let computerChoice = getComputerChoice();
console.log("Human chose:", humanChoice);
console.log("Computer chose:", computerChoice);
playRound(humanChoice, computerChoice);

