//console.log(new Date()) // получаем текущую лату и время в виде строки 



/*
const now = new Date()

const start = new Date(1000 * 60 * 60 * 24 * 365) // сюда передается кол-во миллисекунд

const date = new Date(1997, 0, 6, 15, 15, 15) // еще один способ задать дату 


//console.log(start)
*/



/*
console.log(date)
console.log(now.getFullYear()) // какой год
console.log(now.getMonth()) // а месяц
console.log(now.getDate()) // число 
console.log(now.getHours()) // час 
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())

now.setFullYear(2023) // с помощью set задаем новые значения 
console.log(now)
*/



/*
console.log(now.toDateString()) // приводим вывод к нужному формату 
console.log(now.toTimeString()) // показывает только время 
console.log(now.toLocaleDateString()) // 13.06.2024
console.log(now.toLocaleTimeString()) // необходимая строчка с временем и секундами 
*/



// ====== Приложение (Создаем живое время и при нажатии на кнопки формат менялся)

//const now = new Date()
let mode = 'time' // устанавливаем формат по-умолчанию
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


// Оживляем кнопки 

/*
fullBtn.onclick = function() {
    mode = 'full'
    update()  // делает переключение режимов моментальным
}

dateBtn.onclick = function() {
    mode = 'date'
    update()
}

timeBtn.onclick = function() {
    mode = 'time'
    update()
}
*/

// эти функции можно описать через ЗАМЫКАНИЕ
function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')


// текущую дату нужно вывести в output 
//output.textContent = new Date()
//output.textContent = format(mode) // исправляем баг при переключении формата данных  // избавляемся от повторения в коде 


/*
setInterval(() => {
    //output.textContent = format(mode) // избавляемся от повторения в коде 
    update()                           //   update не принимает параметров, поэтому можно переделать в одну строку
}, 1000)                              // устанавливаем обновление на каждую секунду 
*/

setInterval(update, 100)
update()

function update() {
    output.textContent = format(mode)
}

// устанавливаем режим 'по-умолчанию' так, чтобы транслировалось только время 

// Pure function
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time': 
            return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}