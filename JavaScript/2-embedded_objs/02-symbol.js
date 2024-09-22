// Создание символа и их сравнение:
const artem1 = Symbol('Artem');
console.log(artem1); // Symbol(Artem)

const artem2 = Symbol('Artem');
console.log(artem2); // Symbol(Artem)

// Каждый символ уникален 
console.log(artem1 == artem2); // false
console.log(artem1 === artem2); // false

//// ПРИМИНЕНИЕ:
// Основной областью применения символов являются определение идентификаторов свойств объектов.
// Из-за того, что разрабы имеют одинаковые имена, один из разрабов выпадает и это плохо
const company = {
    'Tom': 'senior',
    'Sam': 'junior',
    'Tom': 'junior',
};

for (dev in company) {
    console.log(`${dev} - ${company[dev]}`);
}

// ВЫВОД:
// Tom - junior
// Sam - junior


// РЕШЕНИЕ ПРОБЛЕМЫ ЧЕРЕЗ SYMBOL!
const coolCompany = {
    [Symbol('Tom')]: 'senior',
    [Symbol('Sam')]: 'junior',
    [Symbol('Tom')]: 'junior',
};

const devs = Object.getOwnPropertySymbols(coolCompany);
for(dev of devs){
    console.log(`${dev.toString()} - ${coolCompany[dev]}`);
}

// ВЫВОД:
// Symbol(Tom) - senior
// Symbol(Sam) - junior
// Symbol(Tom) - junior


// Также мы можем динамически добавлять св-ва с символьными идентификаторами в объект:
const supaCool = {};
supaCool[Symbol('Artem')] = 'middle';
supaCool[Symbol('Liza')] = 'queen';

const peps = Object.getOwnPropertySymbols(supaCool);
for (pep of peps){
    console.log(`${pep.toString()} is ${supaCool[pep]}`);
}

// ВЫВОД:
// Symbol(Artem) is middle
// Symbol(Liza) is queen