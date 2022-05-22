'use strict';

// DOM selectors
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

let computerWin = document.querySelector('.computerWin');
let playerWin = document.querySelector('.playerWin');

let game = document.querySelector('.game');

// Game functions
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
  playerWin.classList.add('hide');
  computerWin.classList.add('hide');
  game.classList.remove('hide');
}

function checkWinner() {
  if (computerScore.innerText >= 5) {
    game.classList.add('hide');
    computerWin.classList.remove('hide');
    console.log('computer');
  } else if (playerScore.innerText >= 5) {
    game.classList.add('hide');
    playerWin.classList.remove('hide');
    console.log('player');
  }
}

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

function computerRound() {
  lose.classList.remove('hide');
  win.classList.add('hide');
  draw.classList.add('hide');

  computerPoints += 1;
  computerScore.innerHTML = computerPoints;

  checkWinner();
}

function playerRound() {
  win.classList.remove('hide');
  lose.classList.add('hide');
  draw.classList.add('hide');
  playerPoints += 1;
  playerScore.innerHTML = playerPoints;
  checkWinner();
}

function drawRound() {
  draw.classList.remove('hide');
  lose.classList.add('hide');
  win.classList.add('hide');
  checkWinner();
}

// Button click events
rock.addEventListener(
  'click',
  function playRound(playerSelection, computerSelection) {
    playerSelection = rock.innerText.toLowerCase();
    player.innerText = `Player chose ${playerSelection}`;

    computerSelection = computerPlay();
    computer.innerText = `Computer chose ${computerSelection}`;

    if (computerSelection === 'paper') {
      computerRound();
    } else if (computerSelection === 'scissors') {
      playerRound();
    } else {
      drawRound();
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
      computerRound();
    } else if (computerSelection === 'paper') {
      playerRound();
    } else {
      drawRound();
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
      computerRound();
    } else if (computerSelection === 'rock') {
      playerRound();
    } else {
      drawRound();
    }
  }
);

reset.addEventListener('click', resetGame);
