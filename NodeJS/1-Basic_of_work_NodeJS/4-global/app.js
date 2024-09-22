// Здесь устанавливаем глобальную переменную username, которую мы получаем в модуле "greet.js". 
// И также выводим на консоль глобальную переменную date. 
// Причем все глобальные функции и объекты, например, console, также доступны внутри global, 
// поэтому мы можем написать и global.console.log(), и просто console.log().

const greet = require('./greet');

global.username = 'Artem';

global.console.log(date);   // 2024-08-24T23:50:52.356Z
greet.printMessage();       // Доброе утро, Artem