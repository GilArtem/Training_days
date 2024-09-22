//// ОБОБЩЕНИЯ
// TS строго типизированый язык. 
// Но иногда нужно построить функционал для возможности использования любых данных
// В некоторых случаях мы могли бы использовать any
function getId(id: any): any{
    return id;
}

let result = getId(5);
console.log(result);

// Если бы вместо числа 5 в функцию передавался бы объект какого-нибудь класса, 
// и нам потом надо было бы использовать этот объект, например, вызывать у него функции, 
// то это было бы проблематично. И чтобы конкретизировать возвращаемый тип, мы можем использовать обобщения:

// С помощью выражения <T> мы указываем, что функция getGemeralId типизирована неким типом T.
function getGeneralId<T>(id: T) {
    return id;
}
// при выполнении функции вместо Т будем подставлять конкретный тип
let res1 = getGeneralId<number>(5);
console.log(res1);

let res2 = getGeneralId<string>("abc");
console.log(res2);



// Пример обощенных массивов
function getString<T>(args: Array<T>): string {
    return args.join(', ');
}

let res3 = getString<number>([1, 2, 3, 4]);
console.log(res3);



// Пример обобщения классов 
class Yula<T> {
    private _id: T;
    
    constructor(id: T) {
        this._id = id;
    }

    getId(): T {
        return this._id;
    }
}

let crepe = new Yula<number>(24);
console.log(crepe.getId());  // вернет number

let alice = new Yula<string>("wtf");
console.log(alice.getId())  // вернет string

// Повторное типизирование объекта приведет к ошибке 
// alice = new Yula<number>(2);


// Пример обобщения интерфейсов
// Тоже самое, что и с классом
interface IUseres<T> {
    getId(): T;
}
 
class Useres<T> implements IUseres<T> {
 
    private _id: T;
    constructor(id: T) {
 
        this._id = id;
    }
    getId(): T {
 
        return this._id;
    }
}


//// ОГРАНИЧЕНИЯ ОБОБЩЕНИЙ 
// иногда возникает необходимость использовать не любой тип, 
// а только некоторый набор типов, который соответствует некоторым критериям

//function compareName<T>(obj1: T, obj2: T): void {
    //if(obj1.name === obj2.name) { // Ошибка! В типе Т нет проперти name

// Подключем ограничения
function compareName<T extends {name: string}>(obj1: T, obj2: T): void {
    if(obj1.name === obj2.name) {
        console.log('Имена совпадают');
    }
    else console.log("Имена различаются");
}

let roy: {name: string} = {name: "Roy"};
let dila: {name: string} = {name: "Dila"};

compareName<{name: string}>(roy, dila);

// ВАЖНО! Параметр T необязательно должен представлять именно тип {name:string}. Например:
// function compareName< --//--

class Pep{
    constructor(public name: string, public age: number){}
}

let wow = new Pep('Wow', 13);
let bobic = new Pep('Bobe', 24);
compareName<Pep>(wow, bobic);


type Qluqva = {id: number; name: string};

let pape: Qluqva = {id: 1, name: "Reno"};
let reno: Qluqva = {id: 2, name: "Reno"};
compareName<Qluqva>(pape, reno);




// В качестве типа могут использоваться любые типы, например, интерфейсы:
interface Named {
    name: string;
}

function funke<T extends Named>(obj1: T, obj2: T): void {
    if(obj1.name === obj2.name) console.log('Имена совпадают');
    else console.log('Имена различаются')
}

// Также ограничения обобщений можно применять в интерфейсах и классах
class NameInfo<T extends Named>{
 
    printName(obj: T): void{
        console.log(`Name: ${obj.name}`);
    }
}

class Buz{ 
    constructor(public name: string, public age: number){}
}

let lee = new Buz('Lee', 189);
let nameInfo1 = new NameInfo<Buz>();
nameInfo1.printName(lee);

type Noose = {id: number; name: string};
let tang: Noose = {id: 23, name: 'Tang'};
let nameInfo2 = new NameInfo<Noose>();
nameInfo2.printName(tang);





//// КЛЮЧЕВОЕ СЛОВО NEW
// Чтобы создать новый объект в коде обобщений, нам надо указать, что обобщенный тип T имеет конструктор.
// Это означает, что вместо параметра type:T нам надо указать type: {new(): T;}

// ОШИБКА!
// function UserFactory<T>(): T {
//     return new T(); // ошибка компиляции
// }

function userFactory<T>(type: { new (): T; }): T {
    return new type();
}
 
 
class Sox {
 
    constructor() {
        console.log("создан объект User");
    }
}
 
let user : Sox = userFactory(Sox);