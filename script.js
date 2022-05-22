'use strict';

// const computerWins =
//   (computerSelection === 'rock' && playerSelection === 'scissors') ||
//   (computerSelection === 'paper' && playerSelection === 'rock') ||
//   (computerSelection === 'scissors' && playerSelection === 'paper');

// Computer choice
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

function checkWinner() {
  if (computerScore > playerScore) {
    console.log(`Computer wins game! ${computerScore}-${playerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`Player wins game! ${playerScore}-${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`Draw! ${playerScore}-${computerScore}`);
  }
}

let win = document.querySelector('.win');
let draw = document.querySelector('.draw');
let lose = document.querySelector('.lose');

let computer = document.querySelector('.computer');
let player = document.querySelector('.player');

let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let reset = document.querySelector('.reset');

let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');

let computerPoints = Number(computerScore.innerText);
let playerPoints = Number(playerScore.innerText);

function resetGame() {
  computerScore.innerText = 0;
  playerScore.innerText = 0;
  computerPoints = 0;
  playerPoints = 0;
  computer.textContent = ' ';
  player.textContent = ' ';
  lose.classList.add('hide');
  win.classList.add('hide');
  draw.classList.add('hide');
}

rock.addEventListener(
  'click',
  function playRound(playerSelection, computerSelection) {
    playerSelection = rock.innerText.toLowerCase();
    player.innerText = `Player chose ${playerSelection}`;

    computerSelection = computerPlay();
    computer.innerText = `Computer chose ${computerSelection}`;

    if (computerSelection === 'paper') {
      lose.classList.remove('hide');
      win.classList.add('hide');
      draw.classList.add('hide');

      computerPoints += 1;
      computerScore.innerHTML = computerPoints;
    } else if (computerSelection === 'scissors') {
      win.classList.remove('hide');
      lose.classList.add('hide');
      draw.classList.add('hide');
      playerPoints += 1;
      playerScore.innerHTML = playerPoints;
    } else {
      draw.classList.remove('hide');
      lose.classList.add('hide');
      win.classList.add('hide');
    }
  }
);

scissors.addEventListener(
  'click',
  function playRound(playerSelection, computerSelection) {
    playerSelection = scissors.innerText.toLowerCase();
    player.innerText = `Player chose ${playerSelection}`;

    computerSelection = computerPlay();
    computer.innerText = `Computer chose ${computerSelection}`;
    if (computerSelection === 'rock') {
      lose.classList.remove('hide');
      win.classList.add('hide');
      draw.classList.add('hide');
      computerPoints += 1;
      computerScore.innerHTML = computerPoints;
    } else if (computerSelection === 'paper') {
      win.classList.remove('hide');
      lose.classList.add('hide');
      draw.classList.add('hide');
      playerPoints += 1;
      playerScore.innerHTML = playerPoints;
    } else {
      draw.classList.remove('hide');
      lose.classList.add('hide');
      win.classList.add('hide');
    }
  }
);

paper.addEventListener(
  'click',
  function playRound(playerSelection, computerSelection) {
    playerSelection = paper.innerText.toLowerCase();
    player.innerText = `Player chose ${playerSelection}`;

    computerSelection = computerPlay();
    computer.innerText = `Computer chose ${computerSelection}`;

    if (computerSelection === 'scissors') {
      lose.classList.remove('hide');
      win.classList.add('hide');
      draw.classList.add('hide');
      computerPoints += 1;
      computerScore.innerHTML = computerPoints;
    } else if (computerSelection === 'rock') {
      win.classList.remove('hide');
      lose.classList.add('hide');
      draw.classList.add('hide');
      playerPoints += 1;
      playerScore.innerHTML = playerPoints;
    } else {
      draw.classList.remove('hide');
      lose.classList.add('hide');
      win.classList.add('hide');
    }
  }
);

reset.addEventListener('click', resetGame);
