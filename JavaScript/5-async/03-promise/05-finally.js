//// Метод конечного выполнения finally()
function generateNums(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Это не номер !");
        else resolve(parsed);
    });
};

function printNum(str){
    generateNums(str)
        .then(val => console.log(val))
        .catch(err => console.log(err))
        .finally(() => console.log('Конец'));
};

printNum('13');
printNum('8');
printNum('try');

//// Вывод:
// 13
// 8
// Это не номер !
// Конец
// Конец
// Конец


// Метод finally() возвращает объект Promise, поэтому после него можно продолжить продолжить цепочку
function generateNumber(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};

function printNumber(str){
    generateNumber(str)
    .then(value => {
        console.log(value);
        return "hello from then";
    })
    .catch(error => {
        console.log(error);
        return "hello from catch";
    })
    .finally(() => {
        console.log("End");
        return "hello from finally";
    })
    .then(message => console.log(message));
};

printNumber("3");

// ВЫВОД:
// 3
// End
// hello from then