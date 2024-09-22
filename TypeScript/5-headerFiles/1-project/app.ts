// нам надо явно указать расположение файла globals.d.ts 
// с помощью директивы reference

/// <reference path="globals.d.ts" />

console.log(message);


// Подключение функций
hello();
console.log(sum(2, 4));


// Подключение объектов
tom.print();


// Подключени сложных объектов
for(let point of points){
    console.log(`Точка с координатами X = ${point.X}  Y = ${point.Y}`)
}


// Подключение классов
let tommy = new Person('Tom', 32);
tommy.display();
console.log(tommy.name);

