'use strict'

const getPuzzle = async (wordCount = 3) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error(`Status ${response.status} returned from http request`)
    }

}

export { getPuzzle as default }