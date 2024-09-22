//// Выводим значение с помощью .then()
const neToP = new Promise((resolve, reject) => {
    const z = x / y;
    console.log('Выполнение асинхронной операции')
    y === 0 ? reject('Переданы некорректные данные!') : resolve(z);
    console.log(`Результат операции: ${z}`);
});
neToP.then();
// Вывод:
// Выполнение асинхронной операции
// Результат операции: 2


//// Если требуется просто вернуть из промиса некоторое значение, то для этого можно использовать метод Promise.resolve():
const isMyProm = Promise.resolve('Здарова всратый мир!');

isMyProm.then(val => console.log(val));  // Здарова всратый мир!


//// Определение промиса через функцию
function sum(x, y){
    return new Promise((resolve, reject) => {
        const result = x + y;
        resolve(result);
    });
};

sum(3, 5).then(val => console.log('Результат операции: ', val));
sum(8, 13).then(val => console.log('Сумма чисел равна: ', val));
sum(13653635635, 3495913585).then(value => console.log('На выходе имеем: ', value));

// ВЫВОД:
// Результат операции:  8
// Сумма чисел равна:  21
// На выходе имеем:  17149549220

// Если логика повторяется, и поскольку then() возвращает промис,
// реализация может выглядеть так:
function sum2(x, y){ 
    return new Promise(function(resolve){
        const result = x + y;
        resolve(result);
    }).then(function(value){ console.log("Результат операции:", value);});
}
sum2(3, 5);  // Результат операции: 8
sum2(25, 4); // Результат операции: 29

//// Демонстрация гибкой реализации:
function sum3(x, y, func){
    // если обработчик не установлен, то устанавливаем обработчик по умолчанию
    if (func === undefined) func = function(val) {console.log('Результат операции по умолчанию: ', val);};

    return new Promise((resolve, reject) => {
        const result = x + y;
        resolve(result);
    }).then(func);
};

sum3(3, 5);
sum3(10, 15, function(val){console.log('Summa: ', val);});