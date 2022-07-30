'use strict';

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset');
const gameText = document.querySelector('.game-text');
const playerMove = document.querySelector('.playerMove');
const computerMove = document.querySelector('.computerMove');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random()) * 2;
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function checkWinner(playerScore, computerScore) {
  if (playerScore == 2) {
  } else if (computerScore == 2) {
  } else return;
}

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameText.textContent = 'DRAW!';
    playerMove.textContent = playerChoice;
    computerMove.textContent = computerChoice;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
    playerMove.textContent = 'rock';
    computerMove.textContent = 'paper';
    gameText.textContent = 'drat! paper covers rock...';
    computerScore += 1;
    document.querySelector('.computerScore').textContent = computerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    playerMove.textContent = 'rock';
    computerMove.textContent = 'scissors';
    gameText.textContent = 'nice! rock smashes scissors!';
    playerScore += 1;
    document.querySelector('.playerScore').textContent = playerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerMove.textContent = 'paper';
    computerMove.textContent = 'rock';
    gameText.textContent = 'nice! paper covers rock!';
    playerScore += 1;
    document.querySelector('.playerScore').textContent = playerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    playerMove.textContent = 'paper';
    computerMove.textContent = 'scissors';
    gameText.textContent = 'drat! scissors cut paper...';
    computerScore += 1;
    document.querySelector('.computerScore').textContent = computerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    playerMove.textContent = 'scissors';
    computerMove.textContent = 'rock';
    gameText.textContent = 'drat! rock smashes scissors...';
    computerScore += 1;
    document.querySelector('.computerScore').textContent = computerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerMove.textContent = 'rock';
    computerMove.textContent = 'scissors';
    gameText.textContent = 'nice! scissors cut paper!';
    playerScore += 1;
    document.querySelector('.playerScore').textContent = playerScore;
    checkWinner(playerScore, computerScore);
    return;
  } else return;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameText.textContent = 'Best 2 out of 3 wins!';
  playerMove.textContent = 'Make your first move...';
  computerMove.textContent = "I'm thinking...";
  document.querySelector('.playerScore').textContent = playerScore;
  document.querySelector('.computerScore').textContent = computerScore;
}

rockButton.addEventListener('click', function () {
  round('rock', getComputerChoice());
});
paperButton.addEventListener('click', function () {
  round('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', function () {
  round('scissors', getComputerChoice());
});
resetButton.addEventListener('click', function () {
  resetGame();
});
