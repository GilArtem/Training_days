//// ОПРЕДЕЛНИЕ 
//  В отличие от массивов кортежи могут хранить значения разных типов. Для определения кортежа применяется синтаксис массива:
let inf: [string, number] = ['rot', 13];

console.log(inf[0]); // rot
inf[0] = 'tor';
console.log(inf[0]); // tor

for (const prop of inf){
    console.log(prop);
}


//// КОРТЕЖИ В ФУНКЦИЯХ
// Кортежи как параметры функции:
function printUser9(user: [string, number]) {
    console.log(user[0]);
    console.log(user[1]);
}
let tom: [string, number] = ["Tom", 36];
printUser9(tom);

// Кортеж как результат функции:
function createUser(name: string, age: number) : [string, number]{
     
    return [name, age];
}
let user = createUser("Bob", 41);
console.log(user[0]);
console.log(user[1]);


//// Необязательные элементы кортежа
let bob9: [string, number, boolean?] = ["Bob", 41, true];
let tom9: [string, number, boolean?] = ["Tom", 36];

// ВАЖНО! Необязательные элементы должны идти в самом конце - после обязательных элементов.


//// ЗАПОЛНЕНИЕ КОРТЕЖА "..."
// При этом неопределенное количество элементов можно определять как в конце, так и в середине и в начале кортежа:
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [...number[], string] = [5, 5, 5, "Physics"];
let chemistry: [string, ...number[], boolean] = ["Chemistry", 3, 3, 4, 5, false];


//// КОРТЕЖ ДЛЯ ЧТЕНИЯ 
// const tor: readonly [string, number] = ["Tom", 36]; 
// tor[1] = 37; // ! Ошибка - элементы кортежа для чтения нельзя изменять



//// ТАКЖЕ ВОЗМОЖНА ДЕКОМПОЗИЦИЯ 
