let humanChoice = "";
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let playrounds = 0;

const humanChoiceBtn = document.querySelector("#humanChoice");
humanChoiceBtn.addEventListener("click", function () {
    if(playrounds <=5){
       humanChoice = prompt("Enter your Choice (Rock, Paper, Scissors):").toLowerCase();
  computerChoice = getComputerChoice(); 
    }
    else{
        alert("Game Over! You have played 5 rounds.");
    }
  
});



function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
    playrounds++; 
  if (humanChoice === computerChoice) {
    console.log("It's a Tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Human Wins!");
    humanScore++;
  } else {
    console.log("Computer Wins!");
    computerScore++;
  }
}

const resultBtn = document.querySelector("#resultButton");
resultBtn.addEventListener("click", function () {
if(playrounds <= 5){
  playRound(humanChoice, computerChoice);
  playrounds++;
    document.querySelector("#result").textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    if(playrounds === 5){
        displayFinalResult();
    }
  }
  else{
        displayFinalResult();
  }
});

function displayFinalResult() {
     const resultDiv = document.querySelector("#result");
  if (humanScore > computerScore) {
    resultDiv.textContent = `Game Over! Human wins with a score of ${humanScore} to ${computerScore}.`;
  } else if (computerScore > humanScore) {
    resultDiv.textContent = `Game Over! Computer wins with a score of ${computerScore} to ${humanScore}.`;
  } else {
    resultDiv.textContent = `Game Over! It's a tie with a score of ${humanScore} to ${computerScore}.`;
  }
}