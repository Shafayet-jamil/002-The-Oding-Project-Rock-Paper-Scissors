
let humanScore = 0;
let computerScore = 0;

// this is the computer choice function
function getComputerChoice(max = 3, min = 1) {
    let number = Math.floor(Math.random() * max);

    let choice = number;

    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// let computerChoice = getComputerChoice();
// console.log(`Computer Choice: ${computerChoice}`);


// this is the player choice function
function getHumanChoice() {
    let humanchoice = prompt("Enter your Choice(Rock, Paper, Scissors): ");
    return humanchoice.toLowerCase();
}


// let humanChoice = getHumanChoice();
// console.log(`Human Choice: ${humanChoice}`);

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      console.log("It's a Tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Human Win! Rock Beat Scissors.");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer Win! Paper beat Rock.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer Win! Scissors beat paper.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human win! Paper beat Rock.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer win! Rock beat Scissors");
        computerScore++;
    }
    else{
        //  if (humanChoice === "scissors" && computerChoice === "Paper") {
        console.log("Human win! Scissors beat Paper.");
        humanScore++;
    }

}


function playGame(){
    let num = 5;
    for (let i = 0; i < num; i++) {
       humanChoice =  getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Finally Human Win the Game!");
    }
    else if (computerScore > humanScore) {
        console.log("FinallyComputer Win the Game!");
    }


}

playGame();
console.log(`Human Score: ${humanScore}  Computer Score: ${computerScore}`);
