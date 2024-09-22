const greeting = require('../01-helloapp/2_my-module');

// Если файл содержит функцию вывода строки в консоль
// console.log(greeting); // It's my module!
                          // {}

// После изменения файла
const os = require('os');

// имя текущего пользователя 
const userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`); // Дата запроса Sun Aug 25 2024 01:00:07 GMT+0200 (Восточная Европа, стандартное время)
greeting.printMessage(userName);              // Доброе утро, gilart


// ЗАМЕТКА:
// получаем компоненты модуля по отдельности:
// const {date, printMessage} = require("./greeting");
// или так
// const printMessage = require("./greeting").printMessage;
