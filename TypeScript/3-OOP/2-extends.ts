// НАСЛЕДОВАНИЕ

// Класс-родитель
class Person {
    name: string;
    job: string = 'IT';

    constructor (personName: string, personJob: string) {
        this.name = personName;
        this.job = personJob;
    }

    introduce(): void{
        console.log(`Hi, my name is ${this.name} and i am ${this.job} professional`)
    }
};

// Наследуемый класс
class Employee extends Person{
    company: string;
    // Если в подклассе имеется свой конструктор, то в нем вызывается конструктор базового класса с помощью super()
    constructor(name: string, job: string, company: string){

        super(name, job);
        this.company = company;

    }

    work(): void{
        console.log(`${this.name} работает в компании ${this.company}`);
    }

    // Переопределение метода
    introduce(): void {
        //  Чтобы не дублировать код и стащит реализацию метода от родителя, используем super()

        super.introduce();
        console.log('Hello from Employee class!!');
    }
};

let gil: Employee = new Employee('Artem Gil', 'Node.js developer', 'Google');
gil.introduce(); // Hello from Employee class!!

// Расширяем функциональность класса:
gil.company = 'Google';
gil.work();

let atrey: Person = new Person('Atrey', 'God');
atrey.introduce(); // Hi, my name is Atrey and i am God professional