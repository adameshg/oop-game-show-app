// let game = new Game();
// let phrase = new Phrase(game.getRandomPhrase(game.phrases));
// const qwerty = document.getElementById('qwerty');

// // Check that startGame function works
// game.startGame();

// // Check that checkLetter and showMatchedLetter functions works
// qwerty.addEventListener('click', e => {
//     console.log(phrase.checkLetter(e.target));
//     phrase.showMatchedLetter(e.target);
// })

// // // // // // //

let game = new Game();
const qwerty = document.getElementById('qwerty');

// Check that startGame function works
game.startGame();

// Instantiate new instance of Phrase class now that activePhrase is set
// let phrase = new Phrase(game.activePhrase);

// Check that checkLetter and showMatchedLetter functions works
qwerty.addEventListener('click', e => {
    // console.log(`checkLetter evaluates to ${phrase.checkLetter(e.target)}`);
    console.log(e.target.textContent);
    game.handleInteraction(e.target);
})