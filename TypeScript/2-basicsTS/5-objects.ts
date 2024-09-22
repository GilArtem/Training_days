//// ОПРЕДЕЛЕНИЕ ОБЪЕКТОВ
let person1: {name: string, age: number} = {name: 'Artem', age: 27};
// Равносильно 
let person2 = {name: "Liza", age: 25};

// Ошибка из-за несоответсвия {name: string, age: number}
// person2 = {name: 'LIZA'}

// А вот так все ок
person1 = {name: 'ARTEM', age: 13}



//// НЕОБЯЗАТЕЛЬНЕ СВ-ВА
let person3: {name: string, age?: number}

person3 = {name: "Julyen"}; // все ок 
console.log(person3);
console.log(person3.age); // undefined

person3 = {name: 'Zaruba', age: 123};
console.log(person3);


//// ОБЪЕКТЫ В ФУНКЦИЯХ
// Объект как параметр функции
function printUser(user: {name: string; age: number}){
    console.log(`name: ${user.name}, age: ${user.age}`);
}

let atrey = {age: 36, name: "Atrey"};
printUser(atrey);

// Притом объект может содержать больше полей, главное, чтобы были поля указанные по шаблону 
let artam = {name: "Artam", age: 14, isMarried: false};
printUser(artam);

// Получаем объект как результат функции 
function defaultObj(): {name: string; age: number}{
    return {name: 'Tom', age: 12};
}

let user1 = defaultObj();
console.log(`name: ${user1.name}, age: ${user1.age}`);



//// ДЕКОМПОЗИЦИЯ ОБЪЕКТОВ-ПАРАМЕТРОВ (со значением по умолчанию)
function printUser2({name, age, job = "IT"}: {name: string; age?: number; job?: string}){
    if(age !== undefined){
        console.log(`name: ${name} age: ${age}, job: ${job}`);
    } else {
        console.log(`name: ${name}, job: ${job}`);
    }
}

let cratos = {name: "Cratos"};
printUser2(cratos);  // name: Cratos, job: IT

let bob = {name: "Bob", age: 24, job: 'GOVNOVOZ'};
printUser2(bob); // name: Bob age: 24, job: GOVNOVOZ
