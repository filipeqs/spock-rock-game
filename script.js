import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const allGameIcons = document.querySelectorAll('.far');

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';
const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// Reset all selected icons
const resetSelected = () => {
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
};

// Reset score and Player/Computer choice
const resetAll = () => {
    startConfetti();
    removeConfetti();
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    resultText.textContent = '';
    resetSelected();
};
window.resetAll = resetAll;

// Random Computer choice
const computerRandomChoice = () => {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) computerChoice = 'rock';
    else if (computerChoiceNumber <= 0.4) computerChoice = 'paper';
    else if (computerChoiceNumber <= 0.6) computerChoice = 'scissors';
    else if (computerChoiceNumber <= 0.8) computerChoice = 'lizard';
    else computerChoice = 'spock';

    displayComputerChoice();
};

// Add selected styling and computer choice
const displayComputerChoice = () => {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = ' --- Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = ' --- Scissors';
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = ' --- Lizard';
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }
};

// Check result, increase score, update result text
const updateScore = (playerChoice) => {
    startConfetti();
    removeConfetti();
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie.";
    } else {
        const choice = choices[playerChoice];
        if (choice.defeats.indexOf(computerChoice) > -1) {
            startConfetti();
            resultText.textContent = 'You Won!';
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = 'You Lost!';
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
};

// Call functions to process turn
const checkResult = (playerChoice) => {
    resetSelected();
    computerRandomChoice();
    updateScore(playerChoice);
};

// Passing player selection value, styling icons
const select = (playerChoice) => {
    checkResult(playerChoice);
    // Add selected styling & player choice
    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = ' --- Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = ' --- Scissors';
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = ' --- Lizard';
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = ' --- Spock';
            break;
        default:
            break;
    }
};
window.select = select;
