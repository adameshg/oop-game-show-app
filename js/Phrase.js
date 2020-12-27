/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const letter = document.getElementsByClassName('letter');
 
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');

        for (let char of this.phrase) {
            const li = document.createElement('li');
            li.textContent = char;
            phraseList.appendChild(li);
            if (char === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${char.toLowerCase()}`;
            }
        }
    }

    checkLetter(button) {
        return this.phrase.toLowerCase().includes(button.textContent);
    }

    showMatchedLetter(button) {
        const matches = document.getElementsByClassName(`${button.textContent}`);

        for (let match of matches) {
            match.classList.add('show');
            match.classList.remove('hide');
        }
    }
}