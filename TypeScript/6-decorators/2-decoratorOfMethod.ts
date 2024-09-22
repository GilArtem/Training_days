// Декоратор метода также представляет функцию, которая принимает три параметра:
function decoratorOfMethod(target: any, propertyName: string, descriptor: PropertyDescriptor){ 
    console.log("Method is deprecated");
}
// 1) Функция конструктора класса для статического метода, либо прототип класса для обычного метода.
// 2) Название метода.
// 3) Объект интерфейса PropertyDescriptor. В TypeScript используется для описания метаданных свойств объектов 
//    в JavaScript, особенно когда вы работаете с методами, такими как Object.defineProperty(). 
//    Вот краткое описание каждой из полей интерфейса:

interface PropertyDescriptor{
    configurable?: boolean;    // можно ли изменять свойство и его атрибуты (например, writable, enumerable, configurable) после его создания.
    enumerable?: boolean;      // будет ли свойство перечисляемым при переборе свойств объекта (например, с использованием цикла for...in или методов, таких как Object.keys()).
    value?: any;               // содержит определение функции.
    writable?: boolean;        // указывает, является ли функция модифицируемой. Сработает с  Object.defineProperty() для создания свойства с этим дескриптором
    get? (): any;              // функция, которая возвращает значение свойства, когда оно запрашивается.
    set? (v: any): void;       // функция, которая вызывается, когда значение свойства устанавливается.
}



//// ПРИМЕР:
// Декоратор readable с помощью выражения descriptor.writable = false; устанавливает, что метод, к которому применяется данный декоратор, не может быть изменен.
function readable(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
}


class User2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @readable
    print(): void{
        console.log(this.name);
    }
}

let tom = new User2('print not has been changed');
tom.print = function(){console.log('print has been changed');}
tom.print(); // Tom

