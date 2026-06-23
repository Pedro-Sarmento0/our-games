let sequence = [];
let playerSequence = [];

function startGame() {
    sequence = [];
    nextRound();
}

function nextRound() {
    playerSequence = [];
    sequence.push(Math.floor(Math.random() * 4));
    document.getElementById("status").innerText = "Watch...";

    let i = 0;
    let interval = setInterval (() => {
        flashButton(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            document.getElementById("status").innerText = "Your turn!";
        }
    }, 800);
}

function flashButton(id) {
    let btn = document.getElementById("btn" + id);
    btn.classList.add("active");
    setTimeout(() => btn.classList.remove("active"), 400);
}

function playerPress(id) {
    flashButton(id);
    playerSequence.push(id);

    let currentIndex = playerSequence.length - 1;
    if (playerSequence[currentIndex] !== sequence[currentIndex]) {
        document.getElementById("status").innerText = "Game Over!";
        return;
    }

    if (playerSequence.length === sequence.length) {
        document.getElementById("status").innerText = "Correct!";
        setTimeout(nextRound, 1000);
    }
}