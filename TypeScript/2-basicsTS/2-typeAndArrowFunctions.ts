function sum (x: number, y: number): number {
    return x + y;
}

function multy (a: number, b: number): number {
    return a * b;
}

// Тип функции можно использовать как тип переменной:
// (параметр1: тип, параметр2: тип,...параметрN: тип) => тип_результата;
let op: (x: number, y: number) => number;

op = sum;
console.log(op(2, 13)); // 15

op = multy;
console.log(op(2, 2));  // 4


// Также он может применяться для определения типа параметра другой функции
function mathOp(x: number, y: number, opa: (a: number, b: number) => number): number{
    return opa(x, y);
}

console.log(mathOp(10, 23, sum)); // 33
console.log(mathOp(10, 10, multy)); // 100



// ВНИМАНИЕ! Если  определенный тип функции предстоит очень часто использовать,
// то для него оптимальнее определить псевдоним и обращаться к типу по этому псевдониму:
type Operation = (a: number, b: number) => number;

function mathOps(x: number, y: number, ops: Operation): number{
  
    return ops(x, y);
}

const summa: Operation = function(x: number, y: number): number {
    return x + y;
};

console.log(mathOps(10, 20, summa)); // 30 


// СТРЕЛОЧНЫЕ ФУНКЦИИ
// Тут ничего необычного (типы переменных можно не указывать)

const func1 = (x: number, y: number) => x + y;
const func2 = x => x ** 2;
const func3 = () => 'Hi';

console.log(func1(13, 17));
console.log(func2(3));
console.log(func3()); 


// Mожно передавать в функцию вместо параметра
function func4(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    const result = operation(x, y);
    return result;
}
console.log(func4(10, 20, (x, y) => x + y)); // 30 
console.log(func4(10, 20, (x, y) => x * y)); // 200 