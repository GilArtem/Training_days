// Подключаем файл с пространсвом имени Persona1
/// <reference path="./1-namespaces.ts" />

let arche = new Persona1.Employee('Arche');
console.log(arche.name);

let sam = new Persona1.Manager("Sam");
console.log(sam.name);


// ВНИМАНИЕ! Далее нам надо объединить оба файла в один файл, который затем можно подключать на веб-страницу. 
// Для этого при компиляции указывается опция:
// `tsc --outFile JS/2-app.js 2-app.ts 1-namespaces.ts`

