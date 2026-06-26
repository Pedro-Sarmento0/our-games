const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let food = {x: 100, y: 200};
let dx = 0, dy = 0;
let gameStarted = false;
let gameOver = false;

const foodEmojis = ["🍎", "🍇", "🍓", "🍒", "🍕", "🍩", "🍪", "🍔"];
let currentFoodEmoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];

document.addEventListener("keydown", e => {
    if (gameOver) return;

    const key = e.key.toLowerCase();

    if ((key === "arrowup" || key === "w") && dy === 0) { dx = 0; dy = -20; gameStarted = true; }
    if ((key === "arrowdown" || key === "s") && dy === 0) { dx = 0; dy = 20; gameStarted = true; }
    if ((key === "arrowleft" || key === "a") && dx === 0) { dx = -20; dy = 0; gameStarted = true; }
    if ((key === "arrowright" || key === "d") && dx === 0) { dx = 20; dy = 0; gameStarted = true; }
});

function draw() {
    ctx.fillStyle = "#2ecc71";
    ctx.fillRect(0, 0, 400, 400);

    ctx.font = "18px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText(currentFoodEmoji, food.x, food.y);

    ctx.fillStyle = "#8B4513";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));

    if (!gameStarted || gameOver) {
        if (gameOver) {
            ctx.fillStyle = "#ff007f";
        ctx.font = "30px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(" Game Over!", 200, 180); 
        }
    return;
}

let head = {x: snake[0].x + dx, y: snake[0].y + dy};

if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    gameOver = true;
    return;
}

for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
        gameOver = true;
        return;
    }
}

snake.unshift(head);

if (head.x === food.x && head.y === food.y) {
    food = {
        x: Math.floor(Math.random() * 20) * 20,
        y: Math.floor(Math.random() * 20) * 20
    };

    currentFoodEmoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
} else {
    snake.pop();
    }
}

function resetGame() {
    snake = [{x: 200, y: 200}];
    food = {x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20};
    currentFoodEmoji = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    dx = 0;
    dy = 0;
    gameStarted = false;
    gameOver = false;
    ctx.textAlign = "left";
}

setInterval(draw, 200);