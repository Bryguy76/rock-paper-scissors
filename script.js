'use strict';

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset');
const gameText = document.querySelector('game-text');

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

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameText.textContent = 'DRAW!';
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
  }
}

rockButton.addEventListener('click', round('rock', getComputerChoice()));
paperButton.addEventListener('click', round('paper', getComputerChoice()));
scissorsButton.addEventListener(
  'click',
  round('scissors', getComputerChoice())
);
