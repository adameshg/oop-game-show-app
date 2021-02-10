/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = [
            new Phrase('May the force be with you'), 
            new Phrase('ET phone home'), 
            new Phrase('Life is like a box of chocolates'), 
            new Phrase('Nobody puts baby in a corner'), 
            new Phrase('I see dead people')
        ];
        this.activePhrase = null;
     }

    /**
     * Randomly retrieves and returns one of the phrases in the 'phrases' array.
     *
     * @return {object} A randomly selected phrase from the 'phrases' array.
     */
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)].phrase;
     }
     
    /**
     * Hides overlay, sets activePhrase, displays activePhrase.
     */
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
     }

     /**
     * Replaces heart image and increments 'missed' property with each
     * incorrect letter player selects.
     */
     removeLife(button) {
        const clickedLetterMatches = this.activePhrase.checkLetter(button);
        const hearts = document.querySelectorAll('img[src]');

        if (!clickedLetterMatches) {
            hearts[this.missed].src = 'images/lostHeart.png';
            this.missed++;
        }
     }

     /**
     * Checks if player has revealed the whole active phrase.
     * @return {boolean} True if the game has been won, false if not.
     */
    checkForWin() {
       const totalLetters = document.querySelectorAll('.letter').length;
       const shownLetters = document.querySelectorAll('.show').length;
       let hasWon = false;
       
       if (totalLetters === shownLetters) {
         hasWon = true;
       }
       
       return hasWon;
    }

    /**
     * Removes old phrase from board, resets incorrect guess count, resets
     * heart images, sets disabled to false on all keys, restores all keys
     * to original color
     */
    resetGame() {
      const letters = document.querySelectorAll('.key');
      const hearts = document.querySelectorAll('img[src]');
      const phraseUl = document.getElementById('phrase');

      phraseUl.innerHTML = '<ul></ul>'
      this.missed = 0;
      hearts.forEach(heart => {
      heart.src = 'images/liveHeart.png';
      });
      letters.forEach(letter => {
         letter.disabled = false;
         letter.classList.remove('chosen');
         letter.classList.remove('wrong');
      })
    }

    /**
     * Displays overlay and updates its appearance to reflect win or loss.
     */
    gameOver() {
       const overlay = document.getElementById('overlay');
       const title = document.querySelector('.title');
       const btnReset = document.querySelector('#btn__reset');
       const phraseUl = document.getElementById('phrase');

       if (this.missed >= 5) {
         overlay.style.display = '';
         overlay.className = 'lose';
         title.innerText = 'Sorry, you lose. :(';
         btnReset.innerText = 'Play Again';
         phraseUl.innerHTML = '<ul></ul>'
         this.resetGame();
       } else if (this.checkForWin()) {
         overlay.style.display = '';
         overlay.className = 'win';
         title.innerText = 'You win!';
         btnReset.innerText = 'Play Again';
         phraseUl.innerHTML = '<ul></ul>'
         this.resetGame();
       }
    }

    /**
     * Disables selected buttons, changes button color if right/wrong,
     * removes life if wrong, checks for win, ends game if phrase is
     * guessed or no lives remain.
     */
     handleInteraction(button) {
        const clickedLetterMatches = this.activePhrase.checkLetter(button);
        button.disabled = true;

        if (clickedLetterMatches) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button);
        } else {
            button.classList.add('wrong');
            this.removeLife(button);
        }

        this.checkForWin();
        this.gameOver();
      }
 }
