// Декоратор класса представляет функцию, которая принимает один параметр:
function classDecor(constructor: Function){
    console.log('decor detector');
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Декоратор classDecor с помощью функции Object.seal 
// запрещает расширение прототипа класса User.
@classDecor
class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print(): void{
        console.log(this.name);
    }
}

let artem = new User('Artem');
artem.print();

// ОШИБКА!
// Object.defineProperty(User, 'age', {
//     value: 17
// });

// ОШИБКА!
// User.prototype.newMethod = function() {
//     console.log('This is a new method');
// }; 
