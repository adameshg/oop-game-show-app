/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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
                li.className = 'letter';
            }
        }
    }
 }