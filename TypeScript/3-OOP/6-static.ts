//// Статические поля и методы относятся не к отдельным объектам, а в целом к классу. 
// И для обащения к статическим полям и методам применяется имя класса.

class Stat {
    age: number;
    name: string;

    // поля и методы статические могут иметь модификаторы доступа
    // private static retire: number = 65;
    static retire: number = 65;
    static calcul(age: number): number{
        // Стоит отметить, что в статических методах мы можем обращаться к 
        // статическим полям или другим статическим методам класса, но мы не 
        // можем обращаться к нестатическим полям и методам и использовать ключевое слово this. 

        //return Stat.retire - this.age;  // ! Ошибка - this.age - обращение к нестатическому полю

        return Stat.retire - age;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


let kem = new Stat('Kem', 22);
let year = Stat.calcul(22);

console.log(Stat.retire);  // 65 Ошибка при приватной модификации!
console.log(`До пенсии ${year} лет`); // До пенсии 43 лет

// Также статические поля и методы могут наследоваться, что позволяет обращаться к ним через имя производного класса:

class newStat extends Stat {};

let u = newStat.calcul(33);
console.log(u) // 32
console.log(newStat.retire);