let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Our vegan options are...')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('We have vegan and non-vegan options....')
} else {
    console.log('You can eat ANYTHING!!!')
}