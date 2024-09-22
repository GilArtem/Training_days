//// Объявление простого прокси-объекта:
// 1. target -  целевой объект (объект, который виртуализируется прокси)
// 2. handler - обработчик (объект-заменитель, содержащий перехватчики
//              для определенных операций объекта target)
let targetEx = {};
let handlerEx = {};
let proxyEx = new Proxy(targetEx, handlerEx);



//// Перехватчик get:
// 1. target -  целевой объект
// 2. prop - название свойства, к которому идет обращение
// 3. receiver - объект Proxy, через который выполняется проксирование 

const handlerForGet = {
  get: function(target, prop, receiver) {
    return некоторое_значение;
  }
};

// Пример:
const targetGet = {
    name: 'Artem',
    secondName: 'Gil',
    age: 27
};

const handlerGet = {
    get: function(target, prop) {
        if(prop === 'name') return 'BIGNAME: ' + target.name.toUpperCase();
        else return target[prop];
    }
};

const proxyGet = new Proxy(targetGet, handlerGet);

console.log(proxyGet.name);        // BIGNAME: ARTEM
console.log(proxyGet.secondName);  // Gil
console.log(proxyGet.age);         // 27

// На выходе получаем преобразованный объект, при этом оригинальный объект остается неизменяемым!


//// Перехватчик set:
// 1. target - оригинальный объект, к которому идет проксирование
// 2. property - название свойства, к которому идет обращение
// 3. value - устанавливаемое значение
// 4. receiver - объект Proxy, через который выполняется проксирование
const handlerForSet = {
    get: function(target, property, value, receiver) {
      return некоторое_значение;
    }
};

// Пример:
const targetSet = { 
    name: 'Artem',
    secondName: 'Gil',
    age: 27
};

const handlerSet = {
    set: function(target, prop, value) {
        if(prop === 'age' && value < 0) console.log('Неккоректный возраст!');
        else return target[prop] = value;
    }
};

const proxySet = new Proxy(targetSet, handlerSet);

console.log(proxySet);       // { name: 'Artem', secondName: 'Gil', age: 27 }
proxySet.name = 'Liza';
console.log(proxySet.name);  // Liza
proxySet.age = 25;
console.log(proxySet.age);   // 25
proxySet.age = -133;
console.log(proxySet.age);   // Неккоректный возраст!
console.log(proxySet);       // { name: 'Liza', secondName: 'Gil', age: 25 }


//// Перехватчик has:
// target - целевой объект.
// property (key) - имя свойства, существование которого будет проверяться.
const handlerHas = {
    has: function(target, key){
        if(key in target && key.includes("ar")) {
            return true;
        }
        return false;
    }
};

const targetHas = {
    car: 'Bentley',
    bar: 4,
    hotel: "no",
};

const proxyHas = new Proxy(targetHas, handlerHas);

console.log("car" in proxyHas);      // true
console.log("hotel" in proxyHas);    // false
console.log("hotel" in targetHas);   // true
console.log("artemar" in proxyHas);  // false
console.log("rewc" in proxyHas);     // false



//// Перехватчик apply:
// target - целевой объект.
// thisArg - аргумент this для вызова.
// argumentsList - список аргументов для вызова.
function targetApply(a, b){
    return a * b;
};

const handlerApply = {  
    apply: function(target, thisArg, argumentsList){
        return target(argumentsList[0], argumentsList[1]) + 1;
    }
};

const proxyApply = new Proxy(targetApply, handlerApply);


console.log(targetApply(2, 13)); // 26
console.log(proxyApply(2, 13)); // 27


//// Перехватчик construct:
// target - целевой объект.
// argumentList - список аргументов для конструктора.
// newTarget - исходный конструктор
const p = new Proxy(targetEx, {
    construct: function(target, argumentsList, newTarget) {
    }
});

// Пример:
function targetConstruct(format) {
    this.format = format;
}

const handlerConstruct = {
    construct: function(target, args){
        return new target('$' + args[0]);
    }
};

const proxyConstruct = new Proxy(targetConstruct, handlerConstruct);
console.log(new proxyConstruct('100').format);  // $100



//// Перехватчик deleteProperty:
// target: целевой объект.
// property: имя свойства, в операцию удаления которого нужно вмешаться.
const d = new Proxy(targetEx, {
    deleteProperty: function(targetEx, property){}
});

// Пример:
const handlerDeleteProperty = {
    deleteProperty: function(target, prop) {
        if(prop in target){
            console.log(`${prop} has been removed`);
            delete target[prop];
        }
    }
};

const targetDeleteProperty = {
    merc: '500 sec',
    lada: 'vesta'
};

const proxyDeleteProperty = new Proxy(targetDeleteProperty, handlerDeleteProperty);

console.log(targetDeleteProperty.merc); // 500 sec
delete proxyDeleteProperty.merc;
console.log(targetDeleteProperty.merc); // merc has been removed
                                        // undefined