//// РЕАЛИЗАЦИЯ ПСЕВДОНИМОВ
// псевдонимы для определения параметров функции
type id = string | number;

function printId2(inputId: id){
    console.log(`Id: ${inputId}`);
}

function getId(isNumber: boolean){
    if(isNumber) return 1;
    else return '1';
}

printId2(1234);
printId2('bfieb');
console.log(getId(false));


// псевдонимы со сложными объектами
type Person = {name: string; age: number};

let dima: Person = {name: "Dima", age: 33};
let vova: Person = {name: 'Vova', age: 55};

function printPerson(user: Person){
    console.log(`name: ${user.name} age: ${user.age}`);
}

printPerson(dima);
printPerson(vova);



//// РАСШИРЕНИЕ ПСЕВДОНИМОВ "&""
// Одни псевдонимы могут заимствовать или расширять код других. 
type newPerson = {name: string; age: number};
// Расширяем
type Employee = Person & {company: string};

let beba: Person = {name: "Beba", age: 44};
let buba: Employee = {name: 'Buba', age: 33, company: 'RosTeg'};

function printThis(user: Person){
    console.log(`name: ${user.name} age: ${user.age}`);
}

printThis(beba);
printThis(buba); // bob представляет Employee, но он также соответствует псевдониму Person