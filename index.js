// array containing options for computer to choose
let options = ["rock", "paper", "scissors"]
// function for computer to choose a random value from array
function getComputerChoice(options) {
    let choice = options[(Math.random * options.length) | 0]
    return choice
}
//variables to hold scores
playerScore = 0
computerScore = 0
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
//function to play the game for 5 rounds and keep score