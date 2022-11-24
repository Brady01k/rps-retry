// array containing options for computer to choose
let options = ["rock", "paper", "scissors"]
// function for computer to choose a random value from array
function getComputerChoice() {
    let choice = options[(Math.random * options.length) | 0]
    return choice
}
//function to take user input and play one round
//function to play the game for 5 rounds and keep score