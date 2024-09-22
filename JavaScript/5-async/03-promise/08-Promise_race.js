// Функция Promise.race() также принимает несколько промисов, 
// только возвращает первый завершенный промис (вне зависимости завершился от успешно или с ошибкой):
const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Hello");
});

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});

Promise.race([promise1, promise2])
    .then(value => console.log(value))       // Hello
    .catch(error => console.log(error));