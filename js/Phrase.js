/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const letter = document.getElementsByClassName('letter');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display upon game start.
     *
     * @param {array} arr The secret phrase.
     */
    addPhraseToDisplay(arr) {
        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement('li');
            li.textContent = arr[i];
            document.querySelector('#phrase ul').appendChild(li);

            if (arr[i] === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('letter');
            }
        }
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase.
     *
     * @param {object} etarget The clicked button.
     * @return {boolean} Whether the letter represented by the clicked button matches 
     * any of the letters in the phrase (true) or not (false).
     */
    checkLetter(etarget) {
    let match = null; 
    for (let i = 0; i < letter.length; i++) {
            if (letter[i].textContent.toLowerCase() === etarget.textContent.toLowerCase()) {
                match = true;
            }
        }
        return match;
    }

    /**
     * Reveals the letters on the board that match the player's selection.
     *
     * @param {object} etarget The clicked button.
     */
    showMatchedLetter(etarget) {
        for (let i = 0; i < letter.length; i++) {
            if (checkLetter(etarget)) {
                letter[i].classList.remove('hide');
                letter[i].classList.add('show');
            }
        }
    }
}