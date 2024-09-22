//// 1.  Обращение к полям и методам внутри класса с помощью - this:
class Person {
    name;
    age;
    print() {
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

const tom = new Person();
tom.name = 'Artom';
tom.age = 13;
tom.print();  // Name: Artom  Age: 13

const be = new Person();
be.name = 'Be';
be.age = 33;
be.print();  // Name: Be  Age: 33



//// 2. Определяем свой консруктор (constructor()):
class Car{
    model;
    color;
    constructor(){
        console.log('Реализация кравтового конструктора');
    }
    print(){
        console.log(`Model: ${this.model}  Color: ${this.color}`);
    }
};

const tesla = new Car(); // Реализация кравтового конструктора
const bmw = new Car();   // Реализация кравтового конструктора


// Демонстрация определения класса с помощью class expression, а также основной цели конструктора:
const Person2 = class {
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

const artem = new Person2('Artem', 27);
artem.print(); // Name: Artem  Age: 27



//// 3. Получение прототипа:
class Person3 {
    constructor(pName, pAge){
        this.name = pName;
        this.age = pAge;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

const liza = new Person3('Liza', 25);

// Получаем прототип:
console.log(Person3.prototype); // через свойство prototype класса
console.log(liza.__proto__); // через свойство __proto__ объекта
console.log(Object.getPrototypeOf(liza)); // через функцию Object.getPrototypeOf и объект
console.log(liza.constructor); // получение функции-конструктора (определения типа) объекта  

// ВЫВОД:
// {}
// {}
// {}
// [class Person3]