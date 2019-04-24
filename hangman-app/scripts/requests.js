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

const getCountry =  async (code) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const countries = await response.json()
        const country = countries.find(country => country.alpha2Code === code)
        if (country !== undefined) {
            return country
        } else {
            throw new Error('Error processing country data')
        }
    } else {
        throw new Error(`Status ${response.status} returned from http request`)
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=37ab7508414d29')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error(`Status ${response.status} returned from http request`)
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}
