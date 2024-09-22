//// ИНТЕРФЕЙСЫ ОБЪЕКТОВ ========================================================================================================================================================================
//  интерфейс - это определение кастомного типа данных, но без реализации
interface Iuser {
    id: number;
    name: string;
    // Необязательное св-во
    age?: number;

}

// Создаем объект типа Iuser
let emp: Iuser = {
    id: 1,
    name: 'Rock',
    age: 23,
}

let manager: Iuser = {
    id: 3,
    name: 'Tony',
}

// аргумент, который передается в функцию, должен представлять объект или класс, который реализует соответствующий интерфейс
function prUser(user: Iuser): void {
    console.log("id: ", user.id);
    console.log("name: ", user.name);
}

prUser(emp); //  id:  13 
             //  name:  Rock

// также можно возвращать объекты интерфейса:
function buildUser(userId: number, userName: string): Iuser {
    return { id: userId, name: userName};
}

let newUser = buildUser(2, 'Bill');
console.log('id: ', newUser.id); // id:  2
console.log('name: ', newUser.name); // name:  Bill

// Только для чтения 
interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = {x: 10, y: 20};
console.log(p);
// p.x = 5; // Ошибка - свойство доступно только для чтения

 
// Определение метода
interface IUser {
    id: number;
    name: string;
    sayWords(words: string): void;
}

let empl: IUser = {
    id: 4,
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${this.name} говорит "${words}"`);
    }
}

empl.sayWords("Привет, как дела?");





//// ИНТЕРФЕЙСЫ КЛАССОВ ========================================================================================================================================================================
// Интерфейсы могут быть реализованы не только объектами, но и классами. 

interface IUzer {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
// Для этого используется ключевое слово implements:
class Uzer implements IUzer{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}
 
let tom = new Uzer(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));

//ВАЖНО!  объект tom является как объектом User, так и объектом IUser:
let tom1: IUzer = new Uzer(1, "Tom", 23);
// ===
let tom2: Uzer = new Uzer(1, "Tom", 23);



//// РАШИРЕНИЯ ИНТЕРФЕСА ========================================================================================================================================================================
// просто определяешь интерфес с тем же имененм и новыми полями 
interface INewInterface {
    id: number;
    name: string;
}

interface INewInterface {
    age: number;
}

// Тепреь классу или объекту нужно иметь 3 поля 

let qwerty: INewInterface = {
    id: 1,
    name: "Sergey",
    age: 30,
}

function printNewInface(inface: INewInterface): void {
    console.log(`id: ${inface.id}  name: ${inface.name}  age: ${inface.age}`);
}

printNewInface(qwerty);



//// НАСЛЕДОВАНИЕ ИНТЕРФЕСОВ ========================================================================================================================================================================
// После наследования интерфейс ICar будет также иметь все те свойства и функции, которые определены в IMovable. 
// И тогда, класс Car, реализующий интерфейс ICar, должен будет реализовать также и свойства и методы интерфейса IMovable.
interface IMovable {
    speed: number;
    move(): void;
}

// наследование интерфейсов
interface ICar extends IMovable{
    fill(): void;
}

class Car implements ICar{
    speed: number;
    move(): void {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
    fill(): void {
        console.log("Заправляем машину топливом");
    }
}

let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();



//// ИНТЕРФЕЙСЫ ФУНКЦИЙ ========================================================================================================================================================================
// определяем интерфейс FullNameBuilder (он содержит сигнатуру функции)
interface FullNameBuilder {
    (name: string, surname: string): string;
}

// определяем переменная simpleBuilder(она  имеет тип FullNameBuilder и поэтому должна представлять функцию с данной сигнатурой)
let simpleBuilder: FullNameBuilder = function(name: string, surname: string): string {
    return "Mr. " + name + " " + surname;
}

let fullName = simpleBuilder('Artem', 'Gil');
console.log(fullName) // Mr. Artem Gil



//// ИНТЕРФЕЙСЫ МАССИВОВ ========================================================================================================================================================================
// Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам
// Индексация по числу 
interface StringArray {
    [index: number]: string;
}

let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];

let myPhone: string = phones[0];
console.log(myPhone); // iPhone 7

// Индексация по строке
interface Dictionary {
    [index: string]: string;
}

let colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]); // #ff0000

//// ГИБРИДНЫЕ ИНТЕРФЕЙСЫ ========================================================================================================================================================================
// могут сочетать различные стили, могут применяться сразу как к определению объекта, так и к определению функции:

// Тип функции, определяемый в таком гибридном интерфейсе, как правило, выступает в роли конструктора объекта.
interface PersonInfo {
    (name: string, surname: string): void;
    fullName: string;
    pass: string;
    auth(): void;
}

function personBuilder(): PersonInfo{
    let person = <PersonInfo>function(name: string, surname: string): void{
        person.fullName = name + " " + surname;
    };

    person.auth = function(){
        console.log(person.fullName + " входит в систему с паролем " + person.pass);
    };
    return person;
}

let wey = personBuilder(); 

wey("Wey", "Chong");
wey.pass = 'qwerty';
wey.auth(); // Wey Chong входит в систему с паролем qwerty
