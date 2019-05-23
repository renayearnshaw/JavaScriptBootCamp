'use strict'

import HangMan from './hangman'
import getPuzzle from './requests'

let game

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#remaining-guesses')
const resetButton = document.querySelector('#reset')

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    // Add each letter of the puzzle into the parent div
    Array.from(game.puzzle).forEach((letter) => {
        const displayLetter = document.createElement('span')
        displayLetter.textContent = letter
        puzzleEl.appendChild(displayLetter)
    })

    guessesEl.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new HangMan(puzzle, 5)
    render()
}

startGame()

resetButton.addEventListener('click', startGame)
