function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice () {
    let object = ["rock", "paper", "scissors"];
    console.log(object[getRandomInt(3)]);
}

function playRound (playerSelection, computerSelection) {
    let playerSelectionLowCase = playerSelection.toString().toLowerCase();
    let computerSelectionLowCase = computerSelection.toString().toLowerCase();
    if (playerSelectionLowCase == "rock") {
        if (computerSelectionLowCase == "rock") {
            console.log("It's bet!");
        }
        else if (computerSelectionLowCase == "paper") {
            console.log("You Lose! Paper beats Rock")
        }
        else if (computerSelectionLowCase == "scissors") {
            console.log("You won! Rock beats Scissors")            
        }
        else {
            console.log("Type just rock, paper or scissors!")
        }
    }
    if (playerSelectionLowCase == "paper") {
        if (computerSelectionLowCase == "paper") {
            console.log("It's bet");
        }
        else if (computerSelectionLowCase == "rock") {
            console.log("You won! Paper beats Rock")
        }
        else if (computerSelectionLowCase == "scissors") {
            console.log("You Lose! Scissors beats Paper")
        }
        else {
            console.log("Type just rock, paper or scissors!")
        }
    }
    if (playerSelectionLowCase == "scissors") {
        if (computerSelectionLowCase == "rock") {
            console.log("You Lose! Rock beats Scissors");
        }
        else if (computerSelectionLowCase == "paper") {
            console.log("You won! Scissors beats Paper")
        }
        else if (computerSelectionLowCase == "scissors") {
            console.log("It's bet")
        }
        else {
            console.log("Type just rock, paper or scissors!")
        }
    }
}
