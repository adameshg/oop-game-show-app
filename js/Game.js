/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
            { phrase: 'May the force be with you' }, 
            { phrase: 'ET phone home' }, 
            { phrase: 'Life is like a box of chocolates' }, 
            { phrase: 'Nobody puts baby in a corner' }, 
            { phrase: 'I see dead people' }
        ];
        this.activePhrase = null;
     }

    /**
     * Randomly retrieves and returns one of the phrases in the 'phrases' array.
     *
     * @return {string} A randomly selected phrase from the 'phrases' array.
     */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }
     
    /**
     * Hides overlay, sets activePhrase, displays activePhrase.
     */
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
        this.activePhrase.addPhraseToDisplay();
     }
 }