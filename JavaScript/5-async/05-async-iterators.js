//// Рассмотрим простейший пример, 
// где в качестве источника данных выступает обычный массив:
const dataSource = ['Tom1', 'Sam1', 'Roy1'];

async function readData(){
    for await (const item of dataSource){
        console.log(item);
    }
};

readData();

// ВЫВОД:
// Tom
// Sam
// Roy

// Здесь в цикле происходит перебор массива dataSource. 
// При выполнении цикла для источника данных (в данном случае для массива) 
// с помощью метода [Symbol.asyncIterator]() неявно создается асинхронный итератор.
// И при каждом обращении к очередному элементу в этом источнике данных неявно из итератора 
// возвращается объект Promise, из которого и получаем текущий элемент массива.

//// Явное создание асинхронного итератора:
const generatePerson = {
    [Symbol.asyncIterator]() {
        return {
            index: 0,
            people: ['Tom2', 'Sam2', 'Roy2'],
            next(){
                if(this.index < this.people.length) {
                    return Promise.resolve({ value: this.people[this.index++], done: false });
                }
                return Promise.resolve({ done: true });
            }
        };
    }
};

generatePerson[Symbol.asyncIterator]()
    .next()
    .then((data) => console.log(data))  // { value: 'Tom2', done: false }

 
// Используем await для получения значений:
async function printPep(){
    const pepIter = generatePerson[Symbol.asyncIterator]();

    while (!(personData = await pepIter.next()).done){
        console.log(personData.value);
    }  
};

printPep();


// НО ПРОЩЕ ИСПОЛЬЗОВАТЬ for-await-of:
const generatePerson3 = {
  [Symbol.asyncIterator]() {
    return {
      index: 0,
      peopl: ["Tom3", "3am", "Bob3"],
      next() {
        if (this.index < this.peopl.length) {
          return Promise.resolve({ value: this.peopl[this.index++], done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};

async function printPeople(){
    for await (const person of generatePerson3) {
        console.log(person);
    }
}

printPeople();



// Последний пример получения чисел:
const generateNumber4 = {
  [Symbol.asyncIterator]() {
    return {
      current: 0,
      end: 10,
      next() {
        if (this.current <= this.end) {
          return Promise.resolve({ value: this.current++, done: false });
        }
          return Promise.resolve({ done: true });
        }
    };
  }
};

async function printNumbers(){
    for await (const n of generateNumber4) {
        console.log(n);
    }
};

printNumbers();