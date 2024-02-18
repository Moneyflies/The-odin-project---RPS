function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice () {
    let object = ["rock", "paper", "scissors"];
    return (object[getRandomInt(3)]);
}

function playRound (playerSelection, computerSelection) {
    let playerSelectionLowCase = playerSelection.toString().toLowerCase();
    const computerSelectionLowCase = getComputerChoice().toString().toLowerCase();
    if (playerSelectionLowCase == "rock") {
        if (computerSelectionLowCase == "rock") {
            return ("It's bet!");
        }
        else if (computerSelectionLowCase == "paper") {
            return ("You Lose! Paper beats Rock");
        }
        else if (computerSelectionLowCase == "scissors") {
            return ("You won! Rock beats Scissors");           
        }
        else {
            return ("Type just rock, paper or scissors!");
        }
    }
    if (playerSelectionLowCase == "paper") {
        if (computerSelectionLowCase == "paper") {
            return ("It's bet");
        }
        else if (computerSelectionLowCase == "rock") {
            return ("You won! Paper beats Rock");
        }
        else if (computerSelectionLowCase == "scissors") {
            return ("You Lose! Scissors beats Paper");
        }
        else {
            return ("Type just rock, paper or scissors!");
        }
    }
    if (playerSelectionLowCase == "scissors") {
        if (computerSelectionLowCase == "rock") {
            return ("You Lose! Rock beats Scissors");
        }
        else if (computerSelectionLowCase == "paper") {
            return ("You won! Scissors beats Paper");
        }
        else if (computerSelectionLowCase == "scissors") {
            return ("It's bet");
        }
        else {
            return ("Type just rock, paper or scissors!");
        }
    }
}

const playGame = () => {
    for(let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Text your choice");
        console.log(playRound);
    }
}

playGame();