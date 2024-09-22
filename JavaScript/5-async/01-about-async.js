//// Aсинхронные функции не возвращают результат асинхронного вычисления через ключевое слово return, 
// а передают его в качестве параметра функции обратного вызова:

function asyncFunction1(){
    let result;
    setTimeout(() => {
        result = 22;
    }, 1000);
    return result;
}

const asyncRes1 = asyncFunction1();
console.log('result1: ', asyncRes1);  // result:  undefined

// Здесь асинхронная функция asyncFunction1 вызывается в синхронной манере, 
// в итоге мы получаем неопределенный результат. Потому что переменная asyncRes1 
// устанавливается до того, как функция asyncFunction1 сгенерирует результат.

//// Проблема генерации ошибок через trow оператор: 
function asyncFunction2(){
    let result;
    setTimeout(() => {
        result = 24;
        if(result < 50) throw new Error('Некорректное значение');
    }, 1000)
    return result;
}
try{
    const asyncRes2 = asyncFunction2();
    console.log('result2: ', asyncRes2);
}
catch(err) {
    console.error('Error: ', err); // Данная строка выполнится по завершению работы основной программы!
}
console.log('Конец программы'); 

// Вывод:
// result2:  undefined - первым этапом
// Конец программы
// ... проходит минимум одна секунда ...
// ...
// /Users/gilart/Desktop/Sobes/Шпоры/Код JS/2-metanitCourse/17-async/01-about-async.js:24
// if(result < 50) throw new Error('Некорректное значение');
// ^
// Error: Некорректное значение
// at Timeout._onTimeout (/Users/gilart/Desktop/Sobes/Шпоры/Код JS/2-metanitCourse/17-async/01-about-async.js:24:31)
// at listOnTimeout (node:internal/timers:573:17)
// at process.processTimers (node:internal/timers:514:7)

// Node.js v20.10.0

//// Решение проблемы и дальнейшее рассуждение смотри в 02-callback.js