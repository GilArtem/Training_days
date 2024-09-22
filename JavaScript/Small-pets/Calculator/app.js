// Создаем переменные-контейнеры (те, что могут меняться)

let num = 42
let firstName = 'Artem'

// Создаем переменные (те, что не изменяются)
//const isProgrammer = true

firstName = 'Gil'
// isProgrammer = false // error


/*
//  Мы можем 

let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let num_ = 13
let _num = 13
let first_name = 'Elena' // можно но в дс не используется среди разрабов
let myNum = 33  // стиль камел используется 
let num42= 10
*/

/*
// Мы не можем 

let 43num= '11'
let num-no = 2
// let + зарезервированные слова 
*/

// alert(firstName)
//console.log('test: ', firstName, num, isProgrammer)


/* базовые операторы */
//console.log(num + 10)
//console.log(num - 10)
//console.log(num * 10)
//console.log(num / 10)
//console.log(num)

//let num2 = num + 10
//console.log(num, num2)
//num = num2 - num
//console.log(num, num2)

//let num3 = (num + 10 * 2) / 5 - 1
//console.log(num3)

//const fullName = firstName + ' Oleguch'
//console.log(fullName)

const resultElement = document.getElementById('result')
//console.log(resultElement.textContent)
//resultElement.textContent = 42 - 2 / null

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
const submitBtn = document.getElementById('submit')
//console.log(typeof sum)
let action = '+'

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multiplicationBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}

// создаем функцию для подкрашивания результата определенным цветом
function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

// создаем функцию для выполнения определенных алгебраических действий 
function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2 
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }
}
/* эти строчки можно сократить с помощью тернанрного оператора 
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
*/


submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)
}
    
    //if (action == '+') {
    //    const sum = Number(input1.value) + Number(input2.value)
    //    printResult(sum)
    //} else if (action == '-') {
    //    const sum = Number(input1.value) - Number(input2.value)
    //    printResult(sum)
    //} 
//}
