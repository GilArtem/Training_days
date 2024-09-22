//// Изначально обработки результата и ошибок в асинхронных функциях представляло использование callback
// Используем callback для получения обработки результата асинхронной функции:
function handlerResultCallback(err, res){
    if(err) {
        console.error(err);
    }
    else {
        console.log('Result: ', res);
    }
};

function asyncFunction(callback){
    setTimeout(() => {
        let result = Math.floor(Math.random() * 100) + 1;
        if(result < 50) {
            callback(new Error('Неккоректное значение: ' + result), null);
        }
        else {
            callback(null, result);
        }
    }, 1000);
}

asyncFunction(handlerResultCallback);

// Если успешное выполнение
// Вывод:
// Result:  77

// В случае ошибки:
// Вывод:
// Error: Неккоректное значение: 19


//// Демонстрация callback hell%
asyncFunction1( (err1, res1) => {
    asyncFunction2( (err2, res2) => {
        asyncFunction3( (err3, res3) => {
            // Тут мог бы быть ваш код
        });
    });
});



