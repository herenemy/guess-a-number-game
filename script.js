'use strict';

// HTML Elements
const question = document.querySelector('.question');
const guessMessage = document.querySelector('.guess-message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnReset = document.querySelector('.again');
const body = document.querySelector('body');

// Functions
const randomNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayGuessMessage = function (message) {
  guessMessage.textContent = message;
};
const displayQuestion = function (message) {
  question.textContent = message;
};
const displayScore = function (message) {
  score.textContent = message;
};

// Variables
let secretNum = randomNum();
let userScore = 20;
let userHighScore = 0;

// Code

// Check button listener
btnCheck.addEventListener('click', () => {
  const guessingNum = Number(document.querySelector('.number-input').value);
  if (!guessingNum) {
    displayGuessMessage('Enter a number!');

    // Player won
  } else if (guessingNum === secretNum) {
    displayGuessMessage('Correct!');
    displayQuestion(secretNum);
    question.style.width = '50rem';
    body.style.backgroundColor = 'rgb(9, 250, 21)';
    if (userScore > userHighScore) {
      userHighScore = userScore;
    }
    highScore.textContent = userHighScore;

    // If number from input is wrong
  } else if (guessingNum !== secretNum) {
    if (userScore > 1) {
      guessMessage.textContent =
        guessingNum > secretNum ? 'Too high' : 'Too low';
      userScore--;
      displayScore(userScore);
    } else {
      displayGuessMessage('Game over!');
      displayScore(0);
      body.style.backgroundColor = 'rgb(250, 0, 0)';
    }
  }
});

// Reset button listener
btnReset.addEventListener('click', () => {
  userScore = 20;
  displayGuessMessage('Enter a number!');
  displayScore(20);
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  displayQuestion('???');
  document.querySelector('.number-input').value = '';
  question.style.width = '25rem';
  secretNum = randomNum();
});
