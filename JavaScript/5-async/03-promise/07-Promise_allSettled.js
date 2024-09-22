// Еще одна функция - Promise.allSettled() также как и Promise.all() 
// принимает набор промисов и выполняет их как единое целое, но возвращает 
// объект со статусом и результатом промиса:
const promise1 = new Promise((resolve,reject) => {
    reject("Непредвиденная ошибка");
    setTimeout(resolve, 500, "Hello");
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "World");
});
  
Promise.allSettled([promise1, promise2])
    .then(values => {
        const [promise1data, promise2data] = values;
        console.log(promise1data);  
        console.log(promise2data);  
});


// ВЫВОД:
// {status: "rejected", reason: "Непредвиденная ошибка"}
// {status: "fulfilled", value: "World"}