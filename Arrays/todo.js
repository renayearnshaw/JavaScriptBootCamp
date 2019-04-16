const todos = [
    {
        text: 'Get herb plants',
        completed: false
    },
    {
        text: 'Order dog bed',
        completed: true
    },
    {
        text: 'Buy puppy pads',
        completed: true
    },
    {
        text: 'Buy a new car',
        completed: true
    },
    {
        text: 'Go on holiday',
        completed: false
    }]

const deleteToDo = function (todos, text) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const stillToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sort = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(todos)
sort(todos)
console.log(todos)

//console.log(stillToDo(todos))

//deleteToDo(todos, 'buy puppy pads')
//console.log(todos)

