function computerPlay() {
    let choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum == 0) {
        return "rock";
    } else if (choiceNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose!";
    }
}