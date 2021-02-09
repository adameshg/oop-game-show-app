/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const phrase = new Phrase(game.activePhrase);
 const btnReset = document.getElementById('btn__reset');
 const qwerty = document.getElementById('qwerty');

btnReset.addEventListener('click', e => {
     game.startGame();
     console.log(game.activePhrase.phrase);
})

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        // if (game.activePhrase.checkLetter(e.target)) {
        //     // phrase.showMatchedLetter(e.target);
        // };
        game.handleInteraction(e.target);
    }
})

