//// Подробная роспись цепочки
const firstStepPromise = new Promise((resolve) => resolve('Смотри'));

const secondStepPromise = firstStepPromise.then(function(value2) {
    return value2 + ', это';
});

const thirdStepPromise = secondStepPromise.then(function(value3) {
    return value3 + ' цепочка';
});

const fourthStepPromise = thirdStepPromise.then(function(value4) {
    return value4 + ' из ебучих промисов!';
}); 

const fifthStepPromise = fourthStepPromise.then(function(finalValue){
    console.log(finalValue);
});

// ВЫВОД:
// Смотри, это цепочка из ебучих промисов!


// ЦЕПОЧКА МОЖЕТ ВЫГЛЯДЕТЬ БОЛЕЕ ЛАКОНИЧНО:
new Promise(resolve => resolve('Салют! '))
    .then(value1 => value1 + 'Это я, Артем, ')
    .then(value2 => value2 + 'который теперь ')
    .then(value3 => value3 + 'пиздец как шарит ')
    .then(value4 => value4 + 'в промисах')
    .then(finalValue => console.log(finalValue + '!'));


//// Обработка ошибок в цепочке промисов и возвращение Promise из catch():
function generateNums(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if(isNaN(parsed)) reject ('Это не номер!');
        else resolve(parsed); 
    });
};

function printNumber(str){
    generateNums(str)
        .then(val => {
            if(val === 4) throw 'Нам такое число не нужно';
            return val ** 2;
        })
        .then(val => console.log(`Результат: ${val}`))
        .catch(err => {
            console.error(err);
            return 0;
        })
        .then(val => console.log('Статус: ', val))
        .then(() => console.log('Продолжаем работу!'))
};

printNumber('try');
printNumber('3');
printNumber('4');
printNumber('13');

// ВЫВОД:
// Результат: 9
// Результат: 169
// Это не номер!
// Статус:  0
// Статус:  undefined
// Статус:  0
// // Статус:  undefined
// Нам такое число не нужно
// Продолжаем работу!
// Продолжаем работу!
// Продолжаем работу!
// Продолжаем работу!

