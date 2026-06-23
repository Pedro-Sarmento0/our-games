console.log("Arcade Hub Loaded!");
const card = document.querySelectorAll('.card');
card.forEach(card => {
    card.addEventListener('click', () => {
        console.log("Loading game: " + card.innerText);
    })
})