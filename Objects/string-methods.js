let validatePassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(validatePassword('fjds'))
console.log(validatePassword('89ereu3h4nfrneuire'))
console.log(validatePassword('fjdspasswordlkjfd094'))