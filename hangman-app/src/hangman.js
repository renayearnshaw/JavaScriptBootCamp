'use strict'

const STATUS = {
    PLAYING: 'Playing',
    FINISHED: 'finished',
    FAILED: 'failed'
}

const NOT_GUESSED = '*'

class HangMan {

    constructor(word, guessesAllowed) {
        this.word = Array.from(word.toLowerCase())
        this.guessed = []
        this.guessesAllowed = guessesAllowed
        this.status = STATUS.PLAYING
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            // only show letters that have already been guessed, or that are spaces
            puzzle += this.guessed.includes(letter) || letter === ' ' ? letter : NOT_GUESSED
        })
        return puzzle
    }

    makeGuess(letter) {
        // You can't make a guess unless you're still playing
        if (this.status !== STATUS.PLAYING) {
            return
        }

        if (typeof letter !== 'string') {
            throw 'Guess must be a letter'
        } else if (letter.length !== 1) {
            throw 'Guess must be a single letter'
        }

        letter = letter.toLowerCase()

        // If the letter hasn't been guessed before, process it
        if (!this.guessed.includes(letter)) {
            // Save the guess
            this.guessed.push(letter)
            // If the guess *isn't* in the word, you lose a guess
            if (!this.word.includes(letter)) {
                this.guessesAllowed--
            }
            this.setStatus()
        }
    }

    get statusMessage() {
        if (this.status === STATUS.PLAYING) {
            return `Guesses left: ${this.guessesAllowed}`
        } else if (this.status === STATUS.FAILED) {
            const word = this.word.join('')
            return `Nice try! The word was "${word}"`
        } else {
            return `Great work! You guessed the word.`
        }
    }

    setStatus() {
        const finished = this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')
        if (finished) {
            this.status = STATUS.FINISHED
        } else if (this.guessesAllowed === 0) {
            this.status = STATUS.FAILED
        } else {
            this.status = STATUS.PLAYING
        }
    }
}

export { HangMan as default }