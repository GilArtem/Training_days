// Вложенное пространство имен 
namespace Data{

    export namespace Persona2 {
        export class Empo {
            constructor(public name: string){}
        }
    }

    export namespace Persona3 {
        export class VIPEmpo {
            constructor(public name: string){}
        }
    }

}

let jerry = new Data.Persona3.VIPEmpo('Jerry');
let tom = new Data.Persona2.Empo('Tom');

console.log(jerry.name);
console.log(tom.name);

// ВАЖНО! ЧТОБЫ ИЗБАВИТЬСЯ ОТ ТАКОГО ДОЛГОГ НАБОРА, МЫ МОЖЕМ ВОСПОЛЬЗОВАТЬСЯ 
// ПСЕВОДИМОМИ (import)

import psevdonym = Data.Persona2.Empo;

let anybody = new psevdonym('Tuco');
console.log(anybody.name);