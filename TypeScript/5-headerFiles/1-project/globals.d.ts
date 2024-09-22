declare let message: string;

// Подключение функций
declare function hello(): void;
declare function sum(a: number, b: number): number;

// Подключение объектов
declare const tom: {name: string, age: number, print: () => void};

// Подключени сложных объектов
interface IPoint {
    X: number;
    Y: number;
}
declare const points: IPoint[];

// Подключение классов
declare class Person{
     
    name: string;
    age: number;
    constructor(name: string, age: number);
    display(): void;
}