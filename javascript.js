let choice = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choice[(Math.floor(Math.random() * choice.length))];
}

function getPlayerChoice () {
    let selection = prompt("Rock, Paper, or Scissors?");
    return selection.toLowerCase();
}

function refreshPage () {
    window.location.reload();
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

if (computerSelection == playerSelection) {
    document.write(`Computer chose ${computerSelection} too.`);
} else if (playerSelection == "rock" && computerSelection == "paper") {
    document.write("Paper covers rock. You lose!");
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    document.write("Rock smashes Scissors. You win!");
} else if (playerSelection == "paper" && computerSelection == "rock") {
    document.write("Paper covers rock. You win!");
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    document.write("Scissors cuts paper. You lose!");
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    document.write("Rock smashes scissors. You lose!")
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    document.write("Scissors cuts paper. You win!")
} else if (playerSelection != "Rock" && "Paper" && "Scissors") {
    document.write("Please choose Rock, Paper, or Scissors")
}