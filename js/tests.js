let game = new Game();
let phrase = new Phrase(game.getRandomPhrase(game.phrases));
const qwerty = document.getElementById('qwerty');

// Check that startGame function works
game.startGame();

// Check that checkLetter and showMatchedLetter functions works
qwerty.addEventListener('click', e => {
    console.log(phrase.checkLetter(e.target));
    phrase.showMatchedLetter(e.target);
})