// Наследование класса с конструктором&
// Вместе со всем функционалом производный класс наследует и конструктор базового класса.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

class Employee extends Person{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
};

const tom = new Person('Tom', 34);
tom.print();  // Name: Tom  Age: 34

const sam = new Employee('Sam', 19);  // Унаследовали конструктор!
sam.print();  // Name: Sam  Age: 19



//// super()
class SuperPerson{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
};

class SuperEmployee extends SuperPerson{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
        }
        print(){
            //console.log(`Name: ${this.name}   Age: ${this.age}`);
            // Зачем нам повторяться? Можно сделать вот так:
            super.print();
            console.log(`Company: ${this.company}`);
        }
};


const dov = new SuperEmployee('Dov', 32, 'Google');
dov.print();
// Вывод:
// Name: Dov   Age: 32
// Company: Google



//// Наследование и приватные поля и методы
// При наследовании стоит учитывать, что производный класс может обращаться к любой функциональности базового класса, 
// КРОМЕ ПРИВАТНЫХ ПОЛЕЙ И МЕТОДОВ!. Например:

class Opa{
    #name;
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.#name}  Age: ${this.age}`);
    }
};

class Oops extends Opa{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    print(){
        super.print();
        console.log(`Company: ${this.company}`);
    }
    work(){
        //console.log(`${this.#name} works in ${this.company}`); // ОШИБКА!! поле #name недоступно из Employee
    }
};

// В данном случае поле #name в классе Person определено как приватное, поэтому достуно только внутри этого класса. 
// Поытка обратиться к этому полю в классе-наследнике Employee приведет к ошибке вне зависимости будет идти обращение через this.#name или super.#name.

// Как решить проблему?

// При необходимости в базовом классе можно определить геттеры и сеттеры, которые обращаются к приватным полям. 
// А в классе-наследники через эти геттеры и сеттеры обращаться к приватным полям базового класса.