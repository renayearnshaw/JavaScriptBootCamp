const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()

const createTipper = (tip) => {
    return (bill) => {
        return bill * (tip / 100)
    }
}

const tip15 = createTipper(15)
const tip10 = createTipper(10)
const tip25 = createTipper(25)

console.log(`A tip of 15% on £100 gives the waiter £${tip15(100)}`)
console.log(`A tip of 10% on £100 gives the waiter £${tip10(100)}`)
console.log(`A tip of 25% on £100 gives the waiter £${tip25(100)}`)