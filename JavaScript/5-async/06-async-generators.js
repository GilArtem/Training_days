// Простой пример асинхронного генератора:
async function* generatePersonAsync(){
    yield 'Artem';
}

const persGen = generatePersonAsync();

// persGen.next() - получаем Promise
// persGen.next().then((data) => console.log(data)) - получаем {value: "Tom", done: false}

persGen.next().then((data) => console.log(data.value));  //Artem



//// for-await-of:
async function* generatePersonAsync2(){
    yield "Tom";
    yield "Sam";
    yield "Bob";
}
async function printPeopleAsync(){
    const personGenerator = generatePersonAsync2();
    for await(person of personGenerator){
        console.log(person);
    }
}
 
printPeopleAsync();
// Tom
// Sam
// Bob




//// await в асинхронных генераторах
// Главным преимуществом асинхронным генераторов является то, 
// что мы можем использовать в них оператор await и соответственно 
// получать данные из источников данных, которые используют асинхронный API.

// Здесь для имитации получения данных из асинхронного источника данных применяется 
// промис, который через 2000 секуд возвращает один из элементов массива, который 
// передается в функцию генератора:


const bodes = [1,2,3,4,5];

async function* generatePersonAsync3(people){
    if (!Array.isArray(people)) {
        throw new TypeError('Expected an array');
    }

    for(const person of people)
        yield await new Promise(resolve => setTimeout(() => resolve(person), 2000));
};

async function printPeopleAsync(people){
    
    console.log("Переданные данные:", people); // Отладочный вывод

    for await (const item of generatePersonAsync3(people)) {
        console.log(item); 
    }
};

printPeopleAsync(bodes);