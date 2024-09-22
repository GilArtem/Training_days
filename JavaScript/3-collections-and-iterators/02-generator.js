function* firstGenerate(){
    yield 5;
};

let go = firstGenerate();
console.log(go.next()); // { value: 5, done: false }
console.log(go.next()); // { value: undefined, done: true }


function* secondGenerate(){
    yield 5;
    yield 25;
    yield 124;
};


let tooGo = secondGenerate();
console.log(tooGo.next()); // { value: 5, done: false }
console.log(tooGo.next()); // { value: 25, done: false }
console.log(tooGo.next()); // { value: 124, done: false }
console.log(tooGo.next()); // { value: undefined, done: true }

//// Для упрощения мы можем возвращать в генераторе элементы из массива:
const nums = [1, 33, 4, 4, 5454, 577];

function* thirdGenerate(){
    for(const n of nums){
        yield n;
    }
};

const numsGo = thirdGenerate();
console.log(numsGo.next().value); // 1
console.log(numsGo.next().value); // 33
// здесь может быть еще какой-то функционал 
// Который будет синхронно реализован, а после этого продолжится работа генератора
console.log('Тут что-то происходит');
console.log(numsGo.next().value); // 4


//// С помощью генератора очень удобно создавать бесконечную последоватеьность:
function* anotherGenerate(){
    let x = 0;
    let y = 0;
    while(true){
        yield {x:x, y:y};
        x += 2;
        y += 1;
    }
};

let pointer = anotherGenerate();
console.log(pointer.next().value); // { x: 0, y: 0 }
console.log(pointer.next().value); // { x: 2, y: 1 }
console.log(pointer.next().value); //  ...
console.log(pointer.next().value); //  ...
console.log(pointer.next().value); // и т.д.

//// for..of

function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
}
const numberGenerator = getNumber();
 
for(const num of numberGenerator){
    console.log(num);
}

// ВЫВОД:
// 5
// 25
// 125


//// Передаем данные в генератор:
function* coolGen(start, end, step){
    for(let n = start; n <= end; n += step){
        yield n;
    }
};

const numGen = coolGen(0, 13, 3);

for (num of numGen){
    console.log(num);
}

// ВЫВОД:
// 0
// 3
// 6
// 9
// 12

console.log();
//// Передача данных через next()
function* whithNextGen(){
    const n = yield 5;
    console.log('n: ', n);
    console.log()
    const m = yield 5 * n;
    console.log('m: ', m);
    console.log()
    yield 5 * m;
};

const numNext = whithNextGen();
console.log(numNext.next().value);  // 5
                                    // n: 2
console.log(numNext.next(2).value); // 10                  
                                    // m: 6
console.log(numNext.next(6).value); // 30                                 


//// Обработка ошибок генератора 
function* bro(){
    try{
        yield 'Artem';
        yield 'Liza';
        yield 'Хватит'
    } catch(err){
        console.log('Error: ', err);
    }
};

const yoBro = bro();
console.log(yoBro.next());       // { value: 'Artem', done: false }
yoBro.throw('Какая-то ошибка');  // Error:  Какая-то ошибка
console.log(yoBro.next());       // { value: undefined, done: true }