'use strict'

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
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new HangMan(puzzle, 5)
    render()
}

startGame()

resetButton.addEventListener('click', startGame)

//getPuzzle(3).then(puzzle => {
//    console.log(puzzle)
//}).catch(error => {
//    console.log(`Error: ${error}`)
//})

//getCurrentCountry().then((country) => {
//    console.log(country.name)
//}).catch((error) => {
//    console.log(`Error: ${error}`)
//})
