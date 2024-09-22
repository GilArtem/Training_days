//// ОБРАБОТКА ОШИБОК:
// Функция catch() в качестве параметра принимает обработчик ошибки. 
// Параметром этой функции-обработчика является то значение, которое передается в reject().

const errPromise = new Promise((resolve, reject) => {
    console.log('Тут мы делаем асинхронную операцию');
    reject('Тут передаем некорректные данные');
});

errPromise.catch((err) => {
    console.log(err);
});

// Вывод:
// Тут мы делаем асинхронную операцию
// Тут передаем некорректные данные


// ГЕНЕРАЦИЯ ОШИБКИ.
// В этом промисе асинхронная операция не дойдет до конца, 
// потому что сгенерируется ошибка и ее выполнение на этом остановится
const errPromise2 = new Promise((resolve, reject) => {
    console.log('Тут мы делаем асинхронную операцию');
   // getSome();  // вызов несуществующей функции
    resolve('Успешное выполнение!')
});

// Разблокируй меня:
errPromise2.catch((err) => {
    console.log(err);
});

// ВЫВОД:
// ReferenceError: getSome is not defined

//// Также ошибку можно сгенерировать с помощью throw оператора:
const getNumber = (str) => {
    const parsed = parseInt(str);
    if (isNaN(parsed)) throw "Это не число!";            // Генерируем ошибку
    else return parsed;
};

const errPromise3 = new Promise((resolve, reject) => {
    console.log("Выполнение асинхронной операции");
    const result = getNumber("hello");
    resolve(result);
});

errPromise3.catch((err) => {
    console.log(err)
});

// ВЫВОД:
// Это не число!

//// try..catch тоже катит:
const errPromise4 = new Promise((resolve, reject) => {
    try{
        console.log('Выполнение асинхронной операции');
        getSome();  // этой функции не существует
        resolve('Здарова, всратый мир!');
    }
    catch(err){
        reject(`Произошла ошибка: ${err.message}`);
    }
});

errPromise4.catch((err) => console.log(err));

// ВЫВОД:
// Выполнение асинхронной операции
// Произошла ошибка: getSome is not defined



//// then() - как обработчик ошибок:
const errPromise5 = (str) => {
    return new Promise((resolve, reject) => {
        const parced = parseInt(str);
        if(isNaN(parced)) reject('значение не является числом!')
        else resolve(parced);
    })
    .then((val) => console.log('Результат операции: ', val),
          (err) => console.log('Возникла ошибка: ', err))
};

errPromise5('24');
errPromise5('hi');

// ВЫВОД:
// Результат операции:  24
// Возникла ошибка:  значение не является числом!