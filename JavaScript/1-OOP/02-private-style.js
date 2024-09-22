const { isString } = require("lodash");

//// 1. Определение приватных полей:
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
};

const nobody = new Person('Nobody', 0);

// Попытка поменять приватные поля приведут к ошибке:
// nobody.#name = 'Sam'; // SyntaxError: Private field '#name' must be declared in an enclosing class
// nobody.#age = 13;

nobody.print(); // Name: Nobody  Age: 0

// Если потребуется как-то к ним все-таки обратиться, то мы можем определить для этого методы. 
// Например, выше метод print() получает их значения и выводит на консоль. 
// Подобным образом можно определить и методы для установки значения:
class Person2 {
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.setAge(age);
    }
    setAge(age){
        if (age > 0 && age < 110) this.#age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.#age}`);
    }
};

const liza = new Person2('liza', 25);

liza.print();         // Name: liza  Age: 25
liza.setAge(26);
liza.print();         // Name: liza  Age: 26
liza.setAge(-1132);
liza.print();         // Name: liza  Age: 26


console.log();
console.log('////////////////////////');
console.log();



//// Приватные методы. 
class Car{
    #model = 'Undefined';
    #color = 'black';
    constructor(model, color){
        this.#model = this.#checkModel(model);
        this.setColor(color);
    }
    // Приватный метод, определяющий проверку модели. Если она не равна 'bmw', то возвращается переданное значение.
    #checkModel(model){
        if(model !== 'bmw') return model;
    }
    setColor(color) {
        if (isString(color)) this.#color = color;
    }
    print() {
        console.log(`Model: ${this.#model} Color: ${this.#color}`);
    }
};

const merc = new Car('Merc-Benz', 'Silver');
const bmw = new Car('bmw', 'Blue');
const tesla = new Car('Tesla', 13);

merc.print();  // Model: Merc-Benz Color: Silver
bmw.print();   // Model: Undefined Color: Blue
tesla.print(); // Model: Tesla Color: black

// Также вне класса мы не можем обратиться к этому методу:
// let carModel = bmw.#checkModel('bmw'); // ОШИБКА!!