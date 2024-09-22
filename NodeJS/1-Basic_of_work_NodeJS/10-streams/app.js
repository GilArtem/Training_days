const fs = require('fs');
// Метод для создания потока записи 
const writebleStream = fs.createWriteStream('hi.txt');

writebleStream.write('Лиза, привет\n'); // write() - запись данных
writebleStream.write('Я знаю, о чем ты думаешь\n');
writebleStream.end('Бали-бали-бали, ведь тебя все заебали!'); // end() - окончание записи

// Метод для создания потока чтения
const readableStream = fs.createReadStream('hi.txt');
// Сам поток разбивается на ряд кусков или чанков (chunk). 
readableStream.on('data', function(chunk){
    console.log(chunk.toString());
});