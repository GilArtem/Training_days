// *1 Реализация инкапсуляции:
// public - общедоступные свойства 
// private - сокрытые свойства
class IncAuto {
    public name: string;
    public model: string;
    public year: number;
    private vin: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = (new Date().getTime());  // это значение не передается снаружи, а генерируется автоматически 
    }
};

const buggatiAuto = new IncAuto('Buggati', 'WOOW', 2023);

// При попытке обращения к свойсву из вне мы получаем ошибку 
//console.log(buggatiAuto.vin); // Свойство "vin" не существует в типе "Auto". 
console.log(buggatiAuto.name);  // Buggati

// Если все-таки нужно получить приватное св-во, то нужно воспользоваться геттером и создать метод возвращающий это приватное значение

class IncAuto2 {
    public name: string;
    public model: string;
    public year: number;
    private vin: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.vin = (new Date().getTime());  // это значение не передается снаружи, а генерируется автоматически 
    }

    get vinNumber() {
        return this.vin;
    }
};

const buggatiAuto2 = new IncAuto2('Buggati', 'OOPS', 2024);

console.log(buggatiAuto2.name); // Buggati
console.log(buggatiAuto2.model);  // OOPS
//console.log(buggatiAuto2.vin); // Свойство "vin" не существует в типе "Auto".  
console.log(buggatiAuto2.vinNumber); // 1711192164225


// *2 Реализация интерфейса:
// readonly - свойства только для чтения (их изменение вызовет ошибку)
// ВАЖНО: интерфейс не может создавать экземпляры, однако на основании интерфейса можно создавать классы

interface AutoFactory {
    readonly name: string;
    readonly model: string;
    year: number;

    getAutoType(): string;
};
// Данный интерфейс говорит о том, что будущий класс должен сдержать 3 св-ва

// Наследуемся от интерфейса с помощью ключевого слова implements
// еще одна отличительная особенность, наследовательности от интерфейса - 
// это то, что в классе-наследнике должны быть реализованы все св-ва и методы, которые описаны в интерфейсе 
// при удалении метода getAutoType возникнет ошибка
class InterAuto implements AutoFactory {
    public name: string;
    public model: string;
    public year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getAutoType(): string {
        return `${this.name} ${this.model} / ${this.year}`;
    }
};


// *3. Реализация абстракций
// используем ключевое слово abstract
// метод getAbstrAutoType() помечается словом abstract, так как не содержит реализации  

abstract class AbsrtAutoFactory {
    readonly name: string = '';
    readonly model: string = '';
    year: number = 0;

    abstract getAbstrAutoType(): string;

    getAbstrAutoModel(): string {
        return this.model;
    }
};

// на основании абстрактного класса создаем наследника
class AbstrAuto extends AbsrtAutoFactory {
    public name: string;
    public model: string;
    public year: number;

    constructor(name: string, model: string, year: number){
        super();     // Вызываем конструктор родительского класса
        this.name = name;
        this.model = model;
        this.year = year;
    }
    
    // описываем абстракный метод в наследнике 
    getAbstrAutoType(): string {
        return `${this.name} ${this.model} / ${this.year}`;
    }
};

const bmwAuto = new AbstrAuto('BMW', 'X69', 2021);

// И теперь после создания экземпляра класса мы можем вызвать два метода 
// от класса-абстрактного и класса-наследника

console.log(bmwAuto.getAbstrAutoType()); // BMW X69 / 2021
console.log(bmwAuto.getAbstrAutoModel());  // X69