// setting up the initial functions

let add = function(a,b) {
    return a + b;
}

let subtract = function(a,b) {
    return a - b;
}
let multiply = function(a, b) {
    return a * b;
}
let divide = function(a, b) {
    return a / b;
}
// a function that takes 2 numbers and uses the selected operator
let operate = function(num1, num2, operator) {
    if (operator === 'add') {
        console.log(add(num1, num2))
    } else if (operator === 'subtract') {
        console.log(subtract(num1, num2))
    } else if (operator === 'multiply') {
        console.log(multiply(num1, num2))
    } else if (operator === 'divide') {
        console.log(divide(num1, num2))
    } 
}