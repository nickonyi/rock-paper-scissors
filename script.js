let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);

    return choices[random];

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    result_p.textContent = userChoice + " beats " + computerChoice + " You win!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("green-glow") }, 300);

}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.textContent = compScore;
    result_p.textContent = computerChoice + " beats " + userChoice + " You lose!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("red-glow") }, 300);

}

function draw(userChoice, computerChoice) {

    compScore_span.textContent = compScore;
    result_p.textContent = userChoice + " equals " + computerChoice + " it's a draw!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() { document.getElementById(userChoice).classList.remove("grey-glow") }, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {

    rock_div.addEventListener("click", function() {
        game("rock");
    })

    paper_div.addEventListener("click", function() {
        game("paper");
    })

    scissors_div.addEventListener("click", function() {
        game("scissors");
    })
}

main();