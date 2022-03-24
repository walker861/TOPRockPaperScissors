'use strict';

// const computerWins =
//   (computerSelection === 'rock' && playerSelection === 'scissors') ||
//   (computerSelection === 'paper' && playerSelection === 'rock') ||
//   (computerSelection === 'scissors' && playerSelection === 'paper');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let random = Math.trunc(Math.random() * 3) + 1;
  if (random === 1) {
    return 'rock';
  } else if (random === 2) {
    return 'paper';
  } else if (random === 3) {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('Choose rock, paper, or scissors');
  playerSelection.toLowerCase();
  computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);

  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    console.log(
      `You lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}!`
    );
    return computerScore++;
  } else if (
    (computerSelection === 'rock' && playerSelection === 'rock') ||
    (computerSelection === 'paper' && playerSelection === 'paper') ||
    (computerSelection === 'scissors' && playerSelection === 'scissors')
  ) {
    console.log(
      `Draw! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}`
    );
  } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')
  ) {
    console.log(
      `You win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}!`
    );
    return playerScore++;
  }
}

function checkWinner() {
  if (computerScore > playerScore) {
    console.log(`Computer wins game! ${computerScore}-${playerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`Player wins game! ${playerScore}-${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`Draw! ${playerScore}-${computerScore}`);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  checkWinner();
}
