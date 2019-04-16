let calculateTip = function (total, tipPercent = 0.2) {
    let tip = tipPercent * 100
    let tipAmount = tipPercent * total
    return `A ${tip}% tip on a £${total} meal is £${tipAmount}`
}

console.log(calculateTip(100))
console.log(calculateTip(100, 0.25))
console.log(calculateTip(100, 0.3))