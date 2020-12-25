/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            'May the force be with you', 
            'ET phone home', 
            'Life is like a box of chocolates', 
            'Nobody puts baby in a corner', 
            'I see dead people'
        ];
        this.activePhrase = null;
    }

    /**
     * Hides start screen overlay and sets the random phrase.
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = getRandomPhrase(this.phrases);
    }

    /**
     * Selects random phrase out of array of phrases.
     *
     * @param {array} arr Array of phrases.
     * @return {object} Random phrase.
     */
    getRandomPhrase(arr) {
        return arr[Math.floor(Math.random() * arr.length)].split('');
    }

    handleInteraction(e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.className = 'chosen';
            e.target.disabled = true;
        }

        // Add checkWin();
    }

    removeLife(e) {
        const letterFound = this.checkLetter(e.target);
        if (letterFound === null && e.target.tagName === 'BUTTON') {
            const scoreboardImg = document.querySelectorAll('.tries img');
            scoreboardImg[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        }
    }
}