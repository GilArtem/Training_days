// Функция Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис:
const promise1 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});

Promise.any([promise1, promise2])
    .then(value => console.log(value))       // World
    .catch(error => console.log(error));

// В данном случае первым выполненным будет промис promise1, однако он завершается с ошибкой. 
// Поэтому в метод then(value => console.log(value)) в качестве value будет передана строка "World" - 
// результат промиса promise2, который успешно завершается.

// ВАЖНО!!! 
//  Если же все промисы завершились с ошибкой, то генерируется исключение типа AggregateError:
const promise3 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});

const promise4 = new Promise((resolve, reject) => {
    reject("error in promise2");
    setTimeout(resolve, 1000, "World");
});

Promise.any([promise3, promise4])
    .then(value => console.log(value)) 
    .catch(error => console.log(error));

// ВЫВОД:
// AggregateError: All promises were rejected

// ВАЖНО!!! 
// С помощью свойства errors типа AggregateError можно получить 
// в виде массива все ошибки, которые возникли в промисах:

const promise5 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});

const promise6 = new Promise((resolve, reject) => {
    reject("error in promise2");
    setTimeout(resolve, 1000, "World");
});

Promise.any([promise5, promise6])
    .then(value => console.log(value)) 
    .catch(err => console.log(err.errors));

// ВЫВОД:
//  ["error in promise1", "error in promise2"]