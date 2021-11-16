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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";
    let result = "";
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = prompt("rock,paper,scissor");
        computerSelection = computerPlay();
        result = singleRound(playerSelection, computerSelection);
        if (result == "You win!") {
            playerScore++;
        } else if (result == "You lose!") {
            computerScore++;
        }

        console.log("player:" + playerScore);
        console.log("computer:" + computerScore);
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log("You have defeated the computer,you are the man!");
    } else {
        console.log("what have you done you loser!you have doomed us!")
    }
}