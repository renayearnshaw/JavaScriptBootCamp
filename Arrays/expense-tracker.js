const account = {
    name: 'Renay Earnshaw',
    expenses: [],
    incomes: [],
    addExpense : function (description, amount) {
        this.expenses.push(
        {
            description: description,
            amount: amount
        })
    },
    addIncome : function (description, amount) {
        this.incomes.push(
        {
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount
        })
        this.incomes.forEach(function(income) {
            totalIncome += income.amount
        })
        return `${this.name} has £${totalIncome - totalExpenses} to play with. \
That\'s £${totalIncome} in income, and £${totalExpenses} in expenses`
    }
}

account.addExpense('coffee', 2.80)
account.addExpense('jumper', 99)
account.addExpense('dog bed', 130)
account.addIncome('salary', 1000)
console.log(account.getAccountSummary())