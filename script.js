// script.js
// script.js
const minNumber = 1; // Set your desired minimum number
let maxNumber = 100; // Default maximum range
let secretNumber;
let attempts = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeGame() {
    maxNumber = parseInt(document.getElementById("rangeInput").value);
    secretNumber = getRandomNumber(minNumber, maxNumber);
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);

    if (!secretNumber) {
        initializeGame();
    }
// function checkGuess() {
    // const userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed it right! The secret number was ${secretNumber}.`;
    } else if (userGuess < secretNumber) {
        document.getElementById("message").textContent = "Try a higher number.";
    } else {
        document.getElementById("message").textContent = "Try a lower number.";
    }

    document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
}
