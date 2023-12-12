function guessingGame() {

    let count = 0;
    let guessed = false;
    const secretNumber = Math.floor(Math.random() * 100);

    const game = (guess) => {

        count ++

        if(guessed){
            return "The game is over, you already won!"
        }

        if(guess === secretNumber){
            guessed = true;
            return `You win! You found ${guess} in ${count} guesses.`
        }

        if(guess > secretNumber){
            return `${guess} is too high!`
        }

        if(guess < secretNumber){
            return `${guess} is too low!`
        }

    }

    return game;

}

module.exports = { guessingGame };
