//// Пространства имен
// Они могут содержать и интерфейсы, и объекты, и функции, и даже обычные переменные и константы:
namespace Persona1 {
    export interface IUser{
        displayInfo(): void;
    }

    export class Employee {
        constructor(public name: string) {}
    }

    export class Manager {
        constructor(public name: string){
        }
    }

    export function work(emp: Employee): void {
        console.log(emp.name, "is working!");
    }

    export let defaultUser = {name: 'Artem'};

    export let value = 'Hello';
};

let artem = new Persona1.Employee('Artem Gil');

Persona1.work(artem);                      // Artem Gil is working!
console.log(Persona1.defaultUser.name);    // Artem
console.log(Persona1.value);               // Hello


