//// В TypeScript три модификатора: public, protected и private.
// Они позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию

// PUBLIC

class Ex1 {
    prop1: string;
    prop2: number;
};

// Ex1 эквивалентно Ex2

class Ex2 {
    public prop1: string;
    public prop2: number;
};



// PRIVATE
// к таким св-ам и методам нельзя будет обратиться извне при создании объекта данного класса

class Ex3Private {
    private _prop1: string;
    private _prop2: number;

    constructor(prop1: string, prop2: number){

        this._prop1 = prop1;
        this._prop2 = prop2;
    }

    public printPub(): void {
        console.log(`PROP1: ${this._prop1}  PROP2: ${this._prop2}`);
    }

    private setTimePriv(prop2: number): number{
        return new Date(). getFullYear() - prop2;
    }
}

let ex3 = new Ex3Private('Any', 13);

ex3.printPub(); // PROP1: Any  PROP2: 13
//console.log(ex3._prop1); // нельзя обратиться, так как _prop1 - private
//ex3.setTimePriv(45); // нельзя обратиться, так как функция - private



// PROTECTED

class Ex4Prot {
    protected name: string;
    private year: number;

    constructor(name: string, age: number){
        this.name = name;
        this.year = this.setYear(age);
    }

    protected printEx4Prot(): void {
        console.log(`NAME: ${this.name} YEAR: ${this.year}`);
    }

    private setYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}

class Child extends Ex4Prot {
    protected company: string;

    constructor(name: string, age: number, company: string){
        super(name, age);
        this.company = company;
    }

    public printChild(): void {
        // console.log('YEAR: ' + this.year);  // поле year недоступно, так как private
        // setYear(27);                        // метод setYear недоступен, так как private
        this.printEx4Prot();       
        console.log(`COMPANY: ${this.company}`);            // метод printPerson доступен, так как protected
    }
}

let man = new Child('Sam', 32, 'MS');
// Метод printEx4Prot выведет - NAME: Sam YEAR: 1992
man.printChild();            // COMPANY: MS



// ОПРЕДЕЛЕНИЕ ПОЛЕЙ ЧЕРЕЗ КОНСТРУКТОР
// Использование модификаторов в параметрах конструктора позволяет сократить написание кода. 

class Ex5 {
    // Используя модификаторы в параметрах конструктора, нам больше не надо явно создать свойства для этих параметров
    // Или нам нужно сделать поле еще и только для чтения
    constructor(private readonly name: string, public age: number) { }
    
    printEx5(): void {
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}

