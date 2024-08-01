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
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both chose ${humanChoice}.`);
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
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)
    }
    return win;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    let result;
    for (i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);

        if (result === true) {
            humanScore += 1;
        } else if (result === false) {
            computerScore += 1;
        } else {
            continue;
        }

    }

    if (humanScore > computerScore) {
        console.log(`You win! ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! ${humanScore} to ${computerScore}`);
    } else {
        console.log(`It's a tie! ${humanScore} to ${computerScore}`);
    }
}

playGame();



