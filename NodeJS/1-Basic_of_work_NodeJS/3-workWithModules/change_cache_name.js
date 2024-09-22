// Пример кеширования данных модулей
const name1 = require('./name');
console.log(`Hello ${name1.name}`); // Hello Liza

const name2 = require('./name');
name2.name = 'Artem';
console.log(`Hello ${name2.name}`); // Hello Artem

// name1.name тоже изменилось!
console.log(name1.name); // Artem