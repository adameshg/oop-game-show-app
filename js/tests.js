let game = new Game();
let phrase = new Phrase('Test test');
const qwerty = document.getElementById('qwerty');

// Check that addPhraseToDisplay function works
document.getElementById('overlay').style.display = 'none';
phrase.addPhraseToDisplay();

// Check that checkLetter function works
qwerty.addEventListener('click', e => {
    console.log(phrase.checkLetter(e.target));
    phrase.showMatchedLetter(e.target);
})