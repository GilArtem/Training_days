//// 1. Статические поля.

class Person {
    // Условный возраст выхода на пенсию
    static retirementAge = 75;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
        
        // ВНИМАНИЕ!! Этого вывода не будет, так как мы не можем обращаться к статическим полям через this!! 
        console.log(`Старческий возраст: ${this.retirementAge}`); // Старческий возраст: undefined
        // Чтобы сработало, нужно использовать имя класса
        console.log(`Старческий возраст: ${Person.retirementAge}`); // Старческий возраст: 65
    }
};

console.log(Person.retirementAge); // 75
Person.retirementAge = 65;
console.log(Person.retirementAge) // 65

const tolya = new Person('Tolya', 44);
tolya.print();



//// 2. Статические методы.
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    static print(){
        console.log(`Модель: ${this.model}  Год: ${this.year}`);
    }
    static printClassInfo(){
        console.log("Класс Car представляет машину");
    }
};

Car.printClassInfo();  // Класс Car представляет машину

// Они также не могут обращаться к статическим методам через this



// Если необходимо в статическом методе обратиться к свойствам объекта, 
// то мы можем опеределить в методе параметр, через который в метод будет передаваться объект:
// Например, ${person.name}
class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static print(person){ 
        console.log(`Имя: ${person.name}  Возраст: ${person.age}`);
    }
}
const tom = new Person2("Tom", 37);
const bob = new Person2("Bob", 41);
Person2.print(tom);  // Tom 37
Person2.print(bob);  // Bob 41



//// ОДНАКО!! мы можем использовать в статических методах слово this для обращения к статическим полям и другим статическим методам:
class Person3{
    static retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static calculateRestAges(person){
        if(this.retirementAge > person.age){
            const restAges = this.retirementAge - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
}
const tom3 = new Person3("Tom", 37);
Person3.calculateRestAges(tom3);      // До пенсии осталось 28 лет
const bob3 = new Person3("Bob", 71);
Person3.calculateRestAges(bob3);      // Вы уже на пенсии