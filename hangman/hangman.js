const words = ["CODING", "JAVASCRIPT", "PYTHON", "DATABASE", "NETWORK", "PROGRAMMER", "HARDWARE", "SOFTWARE", "VARIABLE", "FUNCTION"];
let word = words[Math.floor(Math.random() * words.length)];
let guessed = Array(word.length).fill("_");
let lives = 6;
let guessedLetters = [];

function updateScreen() {
    document.getElementById("word").innerText = guessed.join(" ");
    document.getElementById("lives").innerText = lives;
}

function makeGuess() {
    if (lives <= 0 || !guessed.includes("_")) return;

    let inputElement = document.getElementById("guess");
    let input = inputElement.value.toUpperCase();
    inputElement.value = "";
    inputElement.focus();

    if (!input || !/[A-Z]/.test(input)) return;

    if (guessedLetters.includes(input)) return;

    guessedLetters.push(input);

    if (word.includes(input)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === input) guessed[i] = input;
        }
    } else {
        lives--;
    }

    updateScreen();
    checkWin();
}

function checkWin() {
    let msgElement = document.getElementById("message");

    if (!guessed.includes("_")) {
        msgElement.innerText = "🎉 You Won!";
        msgElement.style.color = "#00ffcc";
    } else if (lives <= 0) {
        msgElement.innerText = '💥 Game Over!';
        msgElement.style.color = "#ff007f";
    }
}

function restartGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessed = Array(word.length).fill("_");

    lives = 6;
    guessedLetters = [];

    document.getElementById("message").innerText = "";

    updateScreen();
}

document.getElementById("guess").addEventListener("keypress", function(e) {
    if (e.key === "Enter") makeGuess();
});

updateScreen();