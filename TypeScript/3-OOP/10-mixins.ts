//// TS не позволяет использовать напрямую множественное наследование.
// Функциональность миксинов (mixins) частично позволяют унаследовать свойства и методы сразу двух и более классов.

class Animal {
    feed(): void {
        console.log('Кормим животное');
    }
}

class Transport {
    speed: number = 0;
    move(): void {
        console.log('Перемещается');
    }
}

class Horse {}

// определяется одноименный c классом Horse интерфейс, 
// который расширяет интерфейсы Animal и Movable
interface Horse extends Animal, Transport {}

// Нам еще надо использовать специальную функцию, 
// которая перекопирует функционал из родительских классов в миксин
function applyMixins(mixinClass: any, arrayClasses: any[]) {
    arrayClasses.forEach(arrayClass => {
        Object.getOwnPropertyNames(arrayClass.prototype).forEach(name => {
            mixinClass.prototype[name] = arrayClass.prototype[name];
        });
    });
}

// Первым параметром идет класс-миксин, а второй параметр - массив применяемых классов.
applyMixins(Horse, [Animal, Transport]);

let jo: Horse = new Horse();
jo.feed(); // Кормим животное
jo.move(); // Перемещается