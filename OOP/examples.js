// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Процедурное программирование (Функциональный подход)
// Этапы, через которые проходит приложение при написаниии с использованием такого подхода:
// 1. Получение аргументов для работы
// 2. Выполнение функций (или процедур)
// 3. Возвращение результата

// Пример (определение палиндрома): 

const isPalindrome = str => str === str.split('').reverse().join('');

console.log(isPalindrome('test')); // false
console.log(isPalindrome('alla')); // true

// Минусы такого подхода: массивность кода, сложности с декомпозицией (разделение логики), трудности в чтении 

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// результатом стало появление ООП

// Объект

const bmwAuto = {
    name: 'BMW',
    model: 'X6',
    year: 2021,
    getAutoType() {
        return `${this.name} ${this.model} -  ${this.year}`;
    },
};

// Класс - это дополнительная надстройка над объектом. (Расширяемый шаблон кода, для создания объектов)
// constructor - это специальный метод, вызываемый в момент инициализации класса, и создаваемый свойства объекта
// this - для определения контекста
class Auto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType() {
        return `${this.name} ${this.model} -  ${this.year}`;
    }
};

// Экземпяр класса (инстанс)
// Для создания инстанса используется ключевое слово new 
const fordAuto = new Auto('Ford', 'Focus', 2010);
// Инстансов можно определять неорганиченное количество 
const audiAuto = new Auto('Audi', 'Q7', 2020);
const teslaAuto = new Auto('Tesla', '3', 2019);


// Каждый созданный экземпляр унаследует свойства своего родителя (классa Auto)
console.log(fordAuto.getAutoType()) // Ford Focus -  2010

// Все ООП строится на 3 основных концепциях (но их больше):
// 1. Наследование
// 2. Инкапсуляция
// 3. Полиморфизм  

// 1. НАСЛЕДОВАНИЕ
// - создание новых классов на основе существующих

// За основу берем уже созданный класс Auto
// Для того, чтобы унаследоваться, нужно определить дочерний класс и воспользоваться ключевым словом extends

class TeslaCarDemo extends Auto{};

// Этого уже достаточно, чтобы создать объект на основании нового класса:
const teslaAutoDemo = new TeslaCarDemo('Tesla', 'Demo', 2018);
console.log(teslaAutoDemo.getAutoType()); // Tesla Demo -  2018

// Чтобы переопределить свойства, нужно воспользоваться методом constructor, используя при этом метод super().
// super() - запускает механизм наследования конструкторов (сначала будет запущен родительский конструктор, а затем дочерний)
class TeslaCar2 extends Auto {
    constructor(name, model, year) {
        super(name, model, year);
        this.name = name;
        this.model = `${model} Model`;
        this.year = year;
    }

    getCarModel() {
        return this.model;
    }
}

// Теперь на основани дочернего класса можно создавать инстансы 
const teslaAuto2 = new TeslaCar2('Tesla', '2', 2019);
console.log(teslaAuto2.getAutoType()); // Tesla 2 Model -  2019   - реализация родительского метода 
console.log(teslaAuto2.getCarModel()); // 2 Model  - реализация дочернего метода 


// 2. ИНКАПСУЛЯЦИЯ
// - сокрытие состояния объекта от прямого доступа из вне 
// отталкиваемся от ранее созданного класса Auto
// прикол в том, что мы можем напрямую получать и изменять значения его свойств

const crashAuto = new Auto('Trash', 'Box', 7777);

console.log(crashAuto.name); // Trash
console.log(crashAuto.model); // Box
console.log(crashAuto.year); // 7777

// тут выводится не то, что хотел продемонстрировать автор ролика, но ход мыслей ясен
console.log(Auto.name); // Auto
console.log(Auto.model); // undefined
console.log(Auto.year); // undefined

// Реализация концепции инкапсуляции => *1 (examples.ts)


// 3. Полиморфизм (-много -форм)
// - способность вызывать один и тотже метод для разных объетов и каждый объект на это действие будет реагировать по-разному
// для примера берем наш родненькой класс Auto и на основании него создадим 3 наследника 
// в каждом наследнике будет собственная реализация метода getAutoType()

class BmwCar extends Auto{
  getAutoType() {
    return `${this.year}, ${this.name}, ${this.model}`;
  }
};

class AudiCar extends Auto{
  getAutoType() {
    return `${this.year}, ${this.name} ${this.model}`;
  }
};

class FiatCar extends Auto{
  getAutoType() {
    return `${this.name} ${this.model} / ${this.year}`;
  }
};

// Создаем 3 экземпляра на основании этих классов 
const bmvAutoPol = new BmwCar('BMW', 'Vedra', 1111);
const audiAutoPol = new AudiCar('Audi', 'Huy7', 2222);
const fiatAutoPol = new FiatCar('Fiat', 'Govna', 3333);

// сделаем вывод нашей функции таким:

const autos = [bmvAutoPol, audiAutoPol, fiatAutoPol];

const getAutoTypes = (autos) => autos.map(auto => auto.getAutoType());

const autoTypes = getAutoTypes(autos);
console.log(autoTypes);  // [ '1111, BMW, Vedra', '2222, Audi Huy7', 'Fiat Govna / 3333' ]

// ЗАМЕТКА: ЭТИ 3 КОНЦЕПЦИИ РАБОТАЮТ ВМЕСТЕ !!

// 4. Интерфейс. Является надстройкой над классами (как класс над объектом)
// Определяет св-ва и методы которые объект или класс должен реализовать.
// Однако внутри себя он не содержит никаких реализаций

// КОД => *2 examplesTS.ts


// 5. Абстракция. Является надстройкой над классами (как класс над объектом)
// - это способ создания простой модели, которая содержит только важные св-ва, с точки зрения контекста приложения 
// и с более сложной модели
// Похожа на интерфейс, но со своими особенностями 
// Особенность заключается в том, что если в абстрактном классе нет реализации метода, то она обязательно должна быть описана в наследнике 
// а если есть, то наследник наследует ее от абстрактного класса 

// КОД => *3 examplesTS.ts


// 6. Композиция.
// Один из вариантов межклассового взаимодействия 
// При этом подходе одни классы или объекты содержат в себе другие
// Особенность состоит в том, что эти вложенные сущности не могут существовать вне корневого класса 

// Создаем 3 класса 
class Engine {
    start() {
        return 'Engine is started';
    }
};

class Wiring {
    start() {
        return 'Wiring is started';
    }
};

class FuelPump {
    start() {
        return 'FuelPump is started';
    }
};

// создаем класс Car, у которого есть особенность реализации конструктора. Все дело в том, что описанные классы деталей создаются именно при инициализации класса Car а не создаются где-то снаружи
// start() метод создаем внутри класса Car для того, чтобы запускать аналогичные методы в каждом из вложенных классов (делигирование)
// ВАЖНО: если мы удалим класс Car, то все входящие в него сущности перестанут существовать 

class Car {
    constructor() {
        // Композиция в самой красе!!
        this.engine = new Engine();
        this.wiring = new Wiring();
        this.fuelPump = new FuelPump();
    }

    start() {
        this.engine.start();
        this.wiring.start();
        this.fuelPump.start();
    }
};


// 7. Агрегация.
// У нас также есть состовляющие авто, к которым прибавился еще один класс Autopilot со своими методами и реализацией 
// Основная идея - классы которые используюся внутри, являются независимыми и передаются снаружи через параметры конструктора

class Engine7 {
    start() {
        return 'Engine is started';
    }
};

class Wiring7 {
    start() {
        return 'Wiring is started';
    }
};

class FuelPump7 {
    start() {
        return 'FuelPump is started';
    }
};

class Autopilot7 {
    navigate() {
        return 'Navigation is started';
    }
};

class Car7 {
    // вот такое интересное создание св-ва автопилота 
    constructor(autopilot) { 
        this.engine = new Engine();
        this.wiring = new Wiring();
        this.fuelPump = new FuelPump();
        this.autopilot = this.autopilot
    }

    start() {
        this.engine.start();
        this.wiring.start();
        this.fuelPump.start();
    }
};

// теперь автопилот может существовать даже после удаления класса Car7
// и его можно передать в любой другой класс

class Airplane {
    constructor(autopilot) {
        this.autopilot = autopilot;
    }
};

const fly = new Airplane(new Autopilot7());

class Helicopter {
    constructor(autopilot) {
        this.autopilot = autopilot;
    }
};

const mi8 = new Airplane(new Autopilot7());