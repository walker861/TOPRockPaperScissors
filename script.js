'use strict';

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

  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log('You lose! Rock smashes scissors!');
    return;
  } else if (computerSelection === 'rock' && playerSelection === 'rock') {
    console.log('Draw! Rock is equal to rock');
    return;
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    console.log('You win! Paper suffocates rock!');
    return;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log('You lose! Paper suffocates rock!');
    return;
  } else if (computerSelection === 'paper' && playerSelection === 'paper') {
    console.log('Draw! Paper is equal to paper!');
    return;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    console.log('You win! Scissors cut paper!');
    return;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log('You lose! Scissors cut paper to bits!');
    return;
  } else if (
    computerSelection === 'scissors' &&
    playerSelection === 'scissors'
  ) {
    console.log('Draw! Scissors are equal to scissors!');
    return;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    console.log('You win! Rock smashes scissors!');
    return;
  }
}
