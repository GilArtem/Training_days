// Декоратор может принимать параметры, которые позволяют настроить из вне поведение декоратора. Например, немного изменим предыдущий пример:

// Значение этого параметра используется для установки свойства descriptor.writable:
function readableTo(onlyRead : boolean){
 
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = !onlyRead;
    };
}
 
class User4 {
 
    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    // При применении декоратора в скобках ему можно передать значения для параметров
    @readableTo(true)
    print():void{
        console.log(this.name);
    }
}

let toma = new User4("Toma");
toma.print = function(){console.log("print has been changed");}
toma.print();  // Toma



//// Параметры и выходной результат метода
function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: number[]){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args);
        console.log(`${JSON.stringify(args)} => ${returnValue}`);
        return returnValue;
    }
}

class Calculator{
 
    @log
    add(x: number, y: number): number{
        return x + y;
    }
}

let calc = new Calculator();
let z = calc.add(4, 5);
z = calc.add(6, 7);




//// Декораторы параметров методов
// Декоратор параметра метода представляет функцию, которая принимает три параметра:
function MyParameterDecorator(target: Object, propertyKey: string, parameterIndex: number){
    // код декоратора
}


//// Определим декоратор для параметра метода:

// Декоратор logParameter добавляет в прототип класса новое свойство metadataKey. 
// Это свойство представляет массив, который содержит индексы декорированных параметров.
function logParameter(target: any, key: string, index: number) {
    var metadataKey = `__log_${key}_parameters`;
     
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
      }
      else {
        target[metadataKey] = [index];
    }
}
// Для чтения метаданных из свойства metadataKey применяется декоратор метода logMethod, 
// который перебирает все параметры метода, находит значения параметров по индексам, которые определены 
// декоратором параметра, и выводит на консоль названия и значения декорированных параметров.
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
 
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
 
        var metadataKey = `__log_${key}_parameters`;
        var indices = target[metadataKey];
 
        if (Array.isArray(indices)) { 
            for (var i = 0; i < args.length; i++) { 
         
                if (indices.indexOf(i) !== -1) { 
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    }
    return descriptor;
}
 
class User5 {
 
    private name: string;
    constructor(name: string){
        this.name = name;
    }
   @logMethod
    setName(@logParameter name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let toms = new User5("Tom");
toms.setName("Bob");
toms.setName("Sam");
