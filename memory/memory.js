const icons = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉"];
const board = document.getElementById("board");
let flipped = [];

function startGame() {
    board.innerHTML = "";
    
    flipped = [];

    let shuffledIcons = [...icons].sort(() => 0.5 - Math.random());

    shuffledIcons.forEach((icon) => {

        let card = document.createElement("div");

    card.classList.add("card");
    card.dataset.icon = icon;
    card.onclick = () => flipCard(card);
    board.appendChild(card);       
    });
}
    function flipCard(card) {
        if(flipped.length < 2 && !card.classList.contains("flipped")) {
            card.classList.add("flipped");
            card.innerText = card.dataset.icon;
            flipped.push(card);

            if (flipped.length === 2) setTimeout(checkMatch, 800);
        }
    }

function checkMatch() {
    if (flipped[0].dataset.icon !== flipped[1].dataset.icon) {
        flipped[0].classList.remove("flipped");
        flipped[1].classList.remove("flipped");
        flipped[0].innerText = "";
        flipped[1].innerText = "";
    }
    flipped = [];
}

startGame();