// Простейший пример использования 
// чере Promise
function sumSimple(x, y){
    return new Promise((resolve) => {
        const result = x + y;
        resolve(result);
    });
};

sumSimple(45, 545).then((value) => console.log('Результат: ', value));

// ВЫВОД:
// Результат:  590


// через async/await
function asyncSum(x, y){
    return new Promise((resolve) => {
        const result = x + y;
        resolve(result);
    });
};

async function calculate(){
    const val = await asyncSum(658, 65);
    console.log('Результат async/await: ', val);
};

calculate();

// ВЫВОД:
// Результат async/await:  723


//// Асинхронная функция может содержать множество асинхронных операций, к которым применяется оператор await. В этом случае все асинхронные операции будут выполняться последовательно:
async function moreCalc(){
    const val1 = await sumSimple(3, 4);
    console.log('1 операция: ', val1);

    const val2 = await sumSimple(243, 4);
    console.log('2 операция: ', val2);

    const val3 = await sumSimple(3, 4424);
    console.log('3 операция: ', val3);

    const val4 = await sumSimple(2424243, 424);
    console.log('4 операция: ', val4);
}

moreCalc();

// ВЫВОД:
// 1 операция:  7
// 2 операция:  247
// 3 операция:  4427
// 4 операция:  2424667


// Обработка ошибок
function sqre(str){
    return new Promise((resolve, reject) => {
        const n = parseInt(str);
        if(isNaN(n)) reject('Ne Number!');
        else resolve(n ** 2);
    })
};

async function calculator(str){
    try{
        const val = await sqre(str);
        console.log('Кадрэд: ', val);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log('Конец')
    }
};

calculator('j7');
calculator('13');

// ВЫВОД:
// Ne Number!
// Конец
// Кадрэд:  169
// Конец