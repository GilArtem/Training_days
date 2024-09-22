const { reject } = require("lodash");

// Возвращает единый объект Promise, который объединяет набор промисов.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'World');
});

promise1.then(val => console.log(val));
promise2.then(val => console.log(val));

// Вывод:
// World
// Hello


// Функция Promise.all() позволяет объединить несколько промисов и выполнять их параллельно, но как единое целое.
// Возвращаемым результатом функции является новый объект Promise.

Promise.all([promise1, promise2])
    .then(values => {
        const [promdata1, promdata2] = values;
        console.log(promdata1, promdata2);  
    });

// ВЫВОД:
// Hello World


// ВАЖНО!!! 
// Значения всех промисов возвращаются только если все они завершились успешно. 
// Но если в асинхронной операции хотя бы одного промиса возникнет ошибка в силу 
// внутренней логики или из-за вызова функции reject(), то все промисы перейдут в 
// состояние rejected, соответственно:

const promise3 = new Promise((resolve,reject) => {
    reject("Непредвиденная ошибка");
    setTimeout(resolve, 500, "Hello");
});
const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "World");
});

Promise.all([promise3, promise4])
    .then(values => {
                const [promise1data, promise2data] = values;
                console.log(promise1data, promise2data);
})
.catch(error => console.log(error)); // Непредвиденная ошибка