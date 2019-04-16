let myAccount = {
    name: 'Renay Earnshaw',
    income: 0,
    expenses: 0
}

let addExpense = function(account, expense) {
    account.expenses += expense
}

let addIncome = function(account, income) {
    account.income += income
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    return `Balance for ${account.name} is £${account.income - account.expenses}.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 7.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
