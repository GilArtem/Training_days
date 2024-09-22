//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *S 

class Auto {
    constructor(model: string) {}
    getCarModel() {}
    saveCustomerOrder(o: Auto) {}
};

// Спустя время этот компактный и красивый класс может превратиться вот в такое чудовище: 
class AutoAfterTime {
    constructor(model: string) {}
    getCarModel() {}
    saveCustomerOrder(o: Auto) {}
    setCarModel() {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
    updateCarSet(set: object) {}
};
// В данном варианте происходит нарушение принципа Единой ответсвенности, 
// ведь теперь у данного класса куча причин измениться 
// А что теперь делать? Ответ: разбиваем все это на отдельные сущности (декомпозиция)

// Взаимодействие с авто
class AutoSR {
    constructor(model: string) {}
    getCarModel() {}
    setCarMode() {}
};

// Взаимодействие с клиентскими заказами
class CustomerAuto{
    saveCustomerOrder(o: Auto) {}
    getCustomerOrder(id: string) {}
    removeCustomerOrder(id: string) {}
};

// Манипуляции с авто в бд
class AutoDB {
    updateCarSet(set: object) {}
};

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *O 

class AutoOC {
    constructor(public model: string) { }
    getCarModel() {}
};

const shop: Array<AutoOC> = [
    new AutoOC ('Tesla'),
    new AutoOC ('Audi'),
];

const getPrice = (auto: Array<AutoOC>): string | void => {
    for (let j = 0; j < auto.length; j++) {
        switch (auto[j].model) {
            case 'Tesla': return '80 000$';
            case 'Audi': return '50 000$';
            default: return 'No Auto Price';
        }
    }
};

console.log(getPrice(shop));

// Сейчас никиаих проблем нет, но они начнуться, когда нам потребуется прибавить еще один товар в магазин, например bmw

const shop_add: Array<AutoOC> = [
    new AutoOC ('Tesla'),
    new AutoOC ('Audi'),
    new AutoOC ('BMW')
];

const getPriceAdd= (auto: Array<AutoOC>): string | void => {
    for (let j = 0; j < auto.length; j++) {
        switch (auto[j].model) {
            case 'Tesla': return '80 000$';
            case 'Audi': return '50 000$';
            case 'BMW': return '70 000$'; // нам пришлось добавить логику в нашу функцию, что протеворечит принципу OC
            default: return 'No Auto Price';
        }
    }
};

console.log(getPrice(shop_add));

// Как должна выглядеть реализация?
// 1. У нас должна быть абсракция в которой будет описан метод возврата цены 

abstract class CarPrice {
    abstract getPrice(): string;
};

// 2. Наследуемся от этой абстакции и реализуем для каждого потомка метод getPrice

class TeslaOC extends CarPrice{
    getPrice(): string {
        return '80 000$';
    }
};

class AudiOC extends CarPrice{
    getPrice(): string {
        return '50 000$';
    }    
};

class BmwOC extends CarPrice{
    getPrice(): string {
        return '70 000$';
    }    
};

// 3. Формируем массив из наших сущностей и изменяем функцию getPrice, чтобы при переборе массива она просто вызывала метод getPrice у каждого элемента 
// Таким образом мы убираем все последующие изменения внутри нее 

const shop_right: Array<CarPrice> = [
    new TeslaOC(),
    new AudiOC(),
    new BmwOC(),
];

const getPriceRight = (auto: Array<CarPrice>): string | void => {
    for (let i = 0; i < auto.length; i++) {
        auto[i].getPrice();
    }
}

console.log(getPriceRight(shop_right));


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *L

// Создаем класс Прямоугольник 
class Rectangle {
    constructor(public width: number, public height: number) { }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    areaOf(): number {
        return this.width * this.height;
    }
};

// Допустим мы захотели создать класс Квадрат (но ведь это тот же прямоугольник, только стороны у него одинаковые)
// Наследуемся 

class Square extends Rectangle {
    width: number = 0;
    height: number = 0;

    constructor(size: number) {
        super(size, size);
    }

    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number) {
        this.height = height;
        this.width = height;
    }
};

// На этом этапе нарушается принцип подстановки 

const mySquare = new Square(20);  // widht and height are 20
mySquare.setWidth(30);  // widht and height are 30
mySquare.setWidth(40);  // widht and height are 40

// И все вроде ок, но если мы захотим использовать Rectangle в качестве интерфейса, а работать будем конкретно с классом Square, то 
// появится проблема 

// как должно работать 
const changeShapeSize1 = (figure: Rectangle): void => {
    figure.setWidth(10); // widht is 10, height is 0
    figure.setHeight(20); // widht is 10, height is 20
};

// как работате на самом деле 
const changeShapeSize2 = (figure: Rectangle): void => {
    figure.setWidth(10); // widht is 10, height is 10
    figure.setHeight(20); // widht is 20, height is 20
};

// Что делать? Создаем общий интерфейс для обоих классов и вместо наследования использовать интерфейс
// Тем самым данный принцип помогает: выявлять проблемные абстакции и скрытые связи между сущностями 
// что делает поведения модулей предсказуемым, а также вводить ограничения на наследование, чтобы как в примере выше потомки 
// не противоречили базовому поведению  

interface Figure {
    setWidth(widht: number): void;
    setHeight(widht: number): void;
    areaOf(): void;
};

class RectangleEd implements Figure{
    setWidth(widht: number) {}
    setHeight(height: number) {}
    areaOf() {}
};

class SquareEd implements Figure{
    setWidth(widht: number) {}
    setHeight(height: number) {}
    areaOf() {}
};


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *I

interface AutoSet {
    getTeslaSet(): any;
    getAudiSet(): any;
    getBmwSet(): any;
}

// если мы захотим унаследовать класс от этого интерфеса, то возникнет проблема того, что каждый класс получит минимум по 2 ненужных ему метода 
// (ведь методы заложенные в интерфейсе обязательно должны быть в наследуемомо классе):

class TeslaI implements AutoSet {
    getTeslaSet(): any {};
    getAudiSet(): any {};
    getBmwSet(): any {};
};

class AudiI implements AutoSet {
    getTeslaSet(): any {};
    getAudiSet(): any {};
    getBmwSet(): any {};
};

class BmwI implements AutoSet {
    getTeslaSet(): any {};
    getAudiSet(): any {};
    getBmwSet(): any {};
};

// Поэтому разобъем интерфейс

interface TeslaSet {
    getTeslaSet(): any;
};

interface AudiSet {
    getAudiSet(): any;
};

interface BmwSet {
    getBmwSet(): any;
};

class Tesla implements TeslaSet {
    getTeslaSet(): any {};
};

class Audi implements AudiSet {
    getAudiSet(): any {};
};

class Bmw implements BmwSet {
    getBmwSet(): any {};
};

// Плюсы этого принципа: снижение зависимости между модулями, при наследовании нет ненужной функциональности, которую требудется реализовать, 
// при внесении изменений затрагиваются только нужные части, а не все зависимые модули, декомпозиция  



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *D

class xmlHttpRequestService{ }

// нижний уровень 
class xmlHttpService extends xmlHttpRequestService {
    request (url: string, type: string) {}
};

// высший уровень 
class Http {
    constructor(private xmlHttpServer: xmlHttpService) {}

    get(url: string, options: any) {
        this.xmlHttpServer.request(url, 'GET');
    }

    post(url: string) {
        this.xmlHttpServer.request(url, 'POST');
    }
};

// Здесь нарушается принцип инверсии зависимостей. В данной архитектуре высокоуровневый модуль зависит от низкоуровневого
// Также нарушается принцип Open-Close

// Решение:

// 1. Создаем интерфейс

interface Connection {
    request(url: string, options: any): any;
};

// 2. Передаем в класс высшего уровня интерфейс (теперь класс потерял зависимость от низкоуровневого)

class Http_true {
    constructor(private httpConnection: Connection) {}

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET');
    }

    post(url: string) {
        this.httpConnection.request(url, 'POST');
    }
}

// 3. Нужно пререписать класс xmlHttpService, чтобы он реализовывал интерфейс Connection
// Реализовать интерфейс - это значит описать его свойства и методы внутри класса наследника 
class xmlHttpRequestService_true {
    open() {}
    send() {}
};

interface Connection_true {
    request(url: string, options: any): any;
};

class xmlHttpService_true implements Connection_true {
    xhr = new xmlHttpRequestService_true();

    request(url: string, type: string) {
        this.xhr.open();
        this.xhr.send();
    }
};
