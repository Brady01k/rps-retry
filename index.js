// array containing options for computer to choose
const options = ["rock", "paper", "scissors"]
// function for computer to choose a random value from array
function getComputerChoice() {
    let choice = options[(Math.random() * options.length) | 0]
    return choice
}
//variables to hold scores and create results messages
playerScore = 0
computerScore = 0

let tie = "You both made the same decision. It's a tie."
let win = "You win!"
let lose = "You lose :("
//function to take user input and play one round
function playRound() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase()
    let computerChoice = getComputerChoice()
    
    if (playerChoice === computerChoice ) {
        return tie
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++
        return win
    }
    else if (playerChoice === "rock" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return lose
    }
}

//create string variables to return text of results

//function to play the game for 5 rounds and keep score
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(), `player score is ${playerScore}. Computer score is ${computerScore}`)
    }

}

console.log(game())
