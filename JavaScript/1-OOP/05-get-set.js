//// Чтобы решить проблему переопределения св-в объекта из вне
// можно пойти 2-мя путями: 
// 1. Уже нам знакомый(с помощью определения приватных полей):
// 2. С помощью применение методов доступа get и set.

//// Пример проблемного кода:
class PersonTrouble {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};

const tom = new PersonTrouble('Tom', 22);
console.log(tom.age); // 22
tom.age = -13;
console.log(tom.age) // -13

// Как мы видим, какая-то шляпа 



//// Исправляем первым способом:
class PersonFirst{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.setAge(age);
    }
    // Выдача переменной
    getAge(){
        return this.#ageValue;
    }
    // Установка переменной 
    setAge(value){
        if(value > 0 && value < 110) this.#ageValue = value;
    }
};

const artom = new PersonFirst('Artom', 23);
console.log(artom.getAge()); // 23
artom.setAge(-14);
console.log(artom.getAge()); // 23




//// С помощью применение методов доступа get и set.
class PersonGetAndSet{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Установка переменной 
    set age(value){
        if(value > 0 && value < 110) this.#ageValue = value;
    }
    // Выдача переменной
    get age(){
        return this.#ageValue;
    }
};

const artem = new PersonGetAndSet('Artem', 27);
console.log(artem.age); // 27
artem.age = - 27;
console.log(artem.age); // 27





//// Свойства, доступные только для чтения
// Например, изменим пример выше и сделаем свойство name доступным только для чтения:
class PersonReadOnly{
    #age = 1;
    #name;
    constructor(name, age){
        this.#name = name;
        this.age = age;
    }
    // set name(value){ this.#name = value; }
    get name(){ return this.#name; }
    set age(value){ if(value > 0 && value < 110) this.#age = value; }
    get age(){ return this.#age; }
};

const greg = new PersonReadOnly('Greg', 50);
console.log(greg.name); // Greg
greg.name = 'NotGreg';  // Это ничего не даст 
console.log(greg.name); // Greg - значение не изменилось

// В данном случае вместо общедоступного св-ва name было определено приватное св-во #name
// Его можно установить только изнутри класса, что мы и делаем в конструкторе класса.
// Однако и вне его можно прочитать с помощью метода get, поэтому попытка присвоить новое имя ни к чему не приводит.




//// Свойства, доступные только для установки
class PersonWriteOnly{
    #id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    set id(value){ this.#id = value; }
    print(){
        console.log(`id: ${this.#id}   name: ${this.name}   age: ${this.age}`);
    }
};

const fred = new PersonWriteOnly('Fred', 33, 1);
fred.print();            // id: 1   name: Fred   age: 33
fred.id = 55;            // устанавливаем значение свойства id
fred.print();            // id: 55   name: Fred   age: 33
console.log(fred.id);    // undefined (значение свойства id нельзя получить)

// Здесь определено свойство id, которое устанавливает значение приватного поля #id. 
// Но поскольку метода get для этого свойства не определено, то при попытке получить 
// значение свойства id, мы получим undefined.




//// Св-ва без обращения к полям
class PersonOfNothing{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){ return `${this.firstName} ${this.lastName}` }
};

const konst = new PersonOfNothing('Artem', 'Gil');
console.log(konst.fullName); // Artem Gil

// Подобным образом можно определить и свойство для записи:
class PersonLast{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){ return `${this.firstName} ${this.lastName}` }
    set fullName(value){ 
        [this.firstName, this.lastName] = value.split(" ");
    }
}
const tom1 = new PersonLast("Tom", "Smith");
console.log(tom1.fullName);  // Tom Smith
tom1.fullName = "Tomas Jefferson";
console.log(tom1.lastName);  // Jefferson

// В данном случае метод set свойства fullName в качестве параметра получает некоторую строку и с помощью ее метода split разбивает 
// по пробелу и получает массив подстрок, которые были разделены пробелом. То есть, теоретически мы рассчитываем, что будет передано 
// что-то наподобие "Tom Smith", а после разделения по пробелу свойство firstName получит значение "Tom", а свойтсво lastName - значение "Smith". 
// Стоит отметить, что для простоты и целй демонстрации здесь мы не рассматриваем исключительные ситуации, когда передается пустая строка или строка, 
// которая не делится по пробелу на две части и т.д.