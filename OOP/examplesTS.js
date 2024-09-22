"use strict";
// *1 Реализация инкапсуляции:
// public - общедоступные свойства 
// private - сокрытые свойства
class IncAuto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = (new Date().getTime()); // это значение не передается снаружи, а генерируется автоматически 
    }
}
;
const buggatiAuto = new IncAuto('Buggati', 'WOOW', 2023);
// При попытке обращения к свойсву из вне мы получаем ошибку 
//console.log(buggatiAuto.vin); // Свойство "vin" не существует в типе "Auto". 
console.log(buggatiAuto.name); // Buggati
// При находжении в иделаьном мире автора:
// Если все-таки нужно получить приватное св-во, то нужно воспользоваться геттером и создать метод возвращающий это приватное значение
class IncAuto2 {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = (new Date().getTime()); // это значение не передается снаружи, а генерируется автоматически 
    }
    get vinNumber() {
        return this.vin;
    }
}
;
const buggatiAuto2 = new IncAuto2('Buggati', 'OOPS', 2024);
console.log(buggatiAuto2.name); // Buggati
console.log(buggatiAuto2.model); // OOPS
//console.log(buggatiAuto2.vin); // Свойство "vin" не существует в типе "Auto".  
console.log(buggatiAuto2.vinNumber); // 1711192164225
;
// Данный интерфейс говорит о том, что будущий класс должен сдержать 3 св-ва
// Наследуемся от интерфейса с помощью ключевого слова implements
// еще одна отличительная особенность, наследовательности от интерфейса - 
// это то, что в классе-наследнике должны быть реализованы все св-ва и методы, которые описаны в интерфейсе 
// при удалении метода getAutoType возникнет ошибка
class InterAuto {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getAutoType() {
        return `${this.name} ${this.model} / ${this.year}`;
    }
}
;
// *3. Реализация абстракций
// используем ключевое слово abstract
// метод getAbstrAutoType() помечается словом abstract, так как не содержит реализации  
class AbsrtAutoFactory {
    constructor() {
        this.name = '';
        this.model = '';
        this.year = 0;
    }
    getAbstrAutoModel() {
        return this.model;
    }
}
;
// на основании абстрактного класса создаем наследника
class AbstrAuto extends AbsrtAutoFactory {
    constructor(name, model, year) {
        super(); // Вызываем конструктор родительского класса
        this.name = name;
        this.model = model;
        this.year = year;
    }
    // описываем абстракный метод в наследнике 
    getAbstrAutoType() {
        return `${this.name} ${this.model} / ${this.year}`;
    }
}
;
const bmwAuto = new AbstrAuto('BMW', 'X69', 2021);
// И теперь после создания экземпляра класса мы можем вызвать два метода 
// от класса-абстрактного и класса-наследника
console.log(bmwAuto.getAbstrAutoType());
console.log(bmwAuto.getAbstrAutoModel()); // X69
