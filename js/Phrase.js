/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 
class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
     * Adds letter placeholders to display when games starts.
     */
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

    /**
     * Checks to see if the selected letter matches a letter in the phrase.
     *
     * @param {object} button The event object target of the keyboard click listener.
     * @return {boolean} Whether the selected letter matches letter(s) in the phrase (true) or not (false).
     */
    checkLetter(button) {
        return this.phrase.phrase.toLowerCase().includes(button.textContent);
    }

    /**
     * Reveals letter(s) on the board that match player's selection.
     *
     * @param {object} button The event object target of the keyboard click listener.
     */
    showMatchedLetter(button) {
        const matches = document.getElementsByClassName(`${button.textContent}`);

        for (let match of matches) {
            match.classList.add('show');
            match.classList.remove('hide');
        }
    }
}