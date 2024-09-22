//// Пространства имен
// Они могут содержать и интерфейсы, и объекты, и функции, и даже обычные переменные и константы:
var Persona1;
(function (Persona1) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Persona1.Employee = Employee;
    var Manager = /** @class */ (function () {
        function Manager(name) {
            this.name = name;
        }
        return Manager;
    }());
    Persona1.Manager = Manager;
    function work(emp) {
        console.log(emp.name, "is working!");
    }
    Persona1.work = work;
    Persona1.defaultUser = { name: 'Artem' };
    Persona1.value = 'Hello';
})(Persona1 || (Persona1 = {}));
;
var artem = new Persona1.Employee('Artem Gil');
Persona1.work(artem); // Artem Gil is working!
console.log(Persona1.defaultUser.name); // Artem
console.log(Persona1.value); // Hello
// Подключаем файл с пространсвом имени Persona1
/// <reference path="./1-namespaces.ts" />
var arche = new Persona1.Employee('Arche');
console.log(arche.name);
var sam = new Persona1.Manager("Sam");
console.log(sam.name);
// ВНИМАНИЕ! Далее нам надо объединить оба файла в один файл, который затем можно подключать на веб-страницу. 
// Для этого при компиляции указывается опция:
// `tsc --outFile JS/2-app.js 2-app.ts 1-namespaces.ts`
