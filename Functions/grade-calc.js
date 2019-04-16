
let calculateGrade = function (score, total) {
    if (typeof score !== 'number' || typeof total !== 'number') {
        throw Error('Both arguments must be numbers')
    }

    let percentage = (score / total) * 100
    let grade = undefined

    if (percentage >= 90) {
        grade = 'A'
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return `Your grade is ${grade} (${percentage}%)`
}

try {
    const grade = calculateGrade(17, '20')
    console.log(grade)
} catch (e) {
    console.log(e.message)
}
