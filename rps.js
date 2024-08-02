let resultDiv = document.querySelector("#results");

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

function getHumanChoice() {
    let choice = parseInt(prompt("Enter a number: \n0 for rock\n1 for paper\n2 for scissors", "0"));
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        
        default:
            console.log("Enter a valid number");
            return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    let win;
    const result = document.createElement("p");
    if (humanChoice === computerChoice) {
        result.textContent = `Tie! You both chose ${humanChoice}.`;
        resultDiv.appendChild(result);
        return;
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            win = false;
        } else {
            win = true;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            win = true;
        } else {
            win = false;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            win = true;
        } else {
            win = false;
        }
    }

    if (win) {
        result.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
    } else {
        result.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
    }
    resultDiv.appendChild(result);
    return win;
}

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
let humanScore = parseInt(humanScoreDisplay.textContent);
let computerScore = parseInt(computerScoreDisplay.textContent);

const winnerDisplay = document.querySelector("#winner");

function onButtonClick(e) {
    let result = playRound(e.target.id, getComputerChoice());

    if (result === true) {
        humanScore += 1;
        humanScoreDisplay.textContent = humanScore;
    } else if (result === false) {
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;
    }
    if (humanScore == 5) {
        winnerDisplay.textContent = "Player wins!";
    } else if (computerScore == 5) {
        winnerDisplay.textContent = "Computer wins!";
    }
    
}

const buttons = document.querySelectorAll("button");

buttons.forEach((e) => e.addEventListener("click", onButtonClick));




