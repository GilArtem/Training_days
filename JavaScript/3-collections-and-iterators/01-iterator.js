//// Перебор массива с помощью цикла for-of:
const peoples = ["Artem", "Liza", "Bob"];
for (const pep of peoples){
    console.log(pep);
}

// ВЫВОД:
// Artem
// Liza
// Bob

// Получаем итератор массива:
// Здесь получаем итератор массива, поэтому на консоль будет выведено что-то наподобие Array Iterator {}
const arrIterator = peoples[Symbol.iterator]();
console.log(arrIterator); // Object [Array Iterator] {}

// Итерация по строкае 
const stringForIter = 'Строка для того, чтобы ее проитерировали';

for (char of stringForIter){
    console.log(char);
}

// Получаем итератор строки:
const strIterator =  stringForIter[Symbol.iterator]();
console.log(strIterator);  // Object [String Iterator] {}


//// Существуют доп. методы для получения итератора.
// Например для массива это entries():
console.log(peoples.entries());  // Object [Array Iterator] {}


////  Метод next() прохождения по итерируемому объекту и получения объета в формате { value: val_of_el, done: true/false }
const iter = peoples[Symbol.iterator]();
console.log(iter.next());        // { value: 'Artem', done: false }
console.log(iter.next().value);  // Liza
console.log(iter.next());        // { value: 'Bob', done: false }
console.log(iter.next());        // { value: undefined, done: true }    <== Ты сам все понял







////  СОЗДАНИЕ СВОЕГО ИТЕРАТОРА:
const nums = [1, 2, 3, 4, 5, 6];

function myReverseArrIter(array){
    let count = array.length;
    return {
        myNext: function(){
            if(count > 0) {
                return {
                    myValue: array[--count],
                    myDone: false
                };
            }
            else {
                return {
                    myValue: undefined,
                    myDone: true
                };
            }
        }
    }
};

const myIter = myReverseArrIter(nums);
while(!(item = myIter.myNext()).myDone){
    console.log(item.myValue);
}

// ВЫВОД:
// 6
// 5
// 4
// 3
// 2
// 1

// НЮАНС! При испоьзовании цикла for..of элементы массива перебираются в правильном порядке. 
for(el of nums){
    console.log(el);
}
// Дабы исправить положение - добавим наш итератор глобально, чтобы он также мог использоваться в цикле for..of

const numsEd = [1, 2, 3, 4, 5, 6];

function myReverseArrIterEd(){
    const array = this;          // Получаем текущий объект через this
    let count = array.length;
    return {
        next: function(){
            if(count > 0) {
                return {
                    value: array[--count],
                    done: false
                };
            }
            else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    }
};

// МЕНЯЕМ ИТЕРАТОР ДЛЯ МАССИВА numsEd:
numsEd[Symbol.iterator] = myReverseArrIterEd;
for(num of numsEd){
    console.log(num);
}



//// СОЗДАНИЕ ИТЕРИРУЕМЫХ ОБЪЕКТОВ
// Для создания перебираемого объекта нам надо определить в объекта метод [Symbol.iterator](). 
// Метод [Symbol.iterator]() возвращает объект, который имеет метод next(). Этот метод возвращает объект с двумя свойствами value и done.
// Этот метод собственно и будет представлять итератор

// Реализуем простейший объект с итератором, который возвращает некоторый набор чисел:
const iterable = {
    [Symbol.iterator]() {
        return {
            // Это два метода для отслеживания текущего элемента в объекте
            // хранит значение текущего элемента.
            current: 1,
            // задает предел
            end: 3,
            next() {
                if(this.current <= this.end) {
                    return { value: this.current++, done: false };
                }
                return { done: true };
            }
        };
    }
};

// Получим из итератора возвращаемые им элементы:
const newIter = iterable[Symbol.iterator]();       // Получаем итератор

console.log(newIter.next());  // { value: 1, done: false }
console.log(newIter.next());  // { value: 2, done: false }
console.log(newIter.next());  // { value: 3, done: false }
console.log(newIter.next());  // { done: true }


// Если мы хотим перебрать наш объект и получить из него элементы, 
// то нам надо обращаться к методу next(). 
// Если объект iterable реализует итератор, то его можно перебрать с помощью цикла for..of:

for(const value of iterable){
    console.log(value);
}

// Цикл for-of автоматически обращается к методу next() и извлекает значение.
// ВЫВОД:
// 1
// 2
// 3


// Еще один пример:
// объект-компания
const company = {
    // массив работников 
    employees: [
        { name: "Art", job: "middle" },
        { name: "Kol", job: "june" },
        { name: "Mir", job: "senior" }
    ]
};

// устанавливаем итератор 
company[Symbol.iterator] = function() {
    // полуачаем массив работников 
    const arr = this.employees;
    let current = 0;
    return{
        next() {
            if(current < arr.length){
                return { value: arr[current++].name , done: false};
            }
            else {
                return { value: undefined, done: true };
            }
        }
    }
};

for (const employee of company){
    console.log(employee);
}

// ВЫВОД:
// Art
// Kol 
// Mir


