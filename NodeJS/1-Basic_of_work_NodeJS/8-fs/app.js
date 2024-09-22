const fs = require('fs');

//// АСИНХРОННОЕ ЧТЕНИЕ ФАЙЛА
/**
 * fs.readFile(path[, options], callback)
 * path: путь к файлу
 * options: необязательный параметр, который представляет дополнительные параметры считывания, в частности, кодировку
 * callback: функция обратного вызова, которая выполняется после завершения чтения.
 */
fs.readFile('./text.txt', (err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log(data.toString()); //  выводим считанные данные
});

console.log('Асинзронное чтение файла. (Этот текст будет выведен в первую очередь!)');
console.log('А уже только потом отработает асинхронная функци fs.readFile()')
// ВНИМАНИЕ!!  
// Несмотря на то, что функция fs.readFile() вызывается первой, но так как она асинхронная, она не блокирует поток выполнения, поэтому ее результат выводится в самом конце.


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');





//// СИНХРОННОЕ ЧТЕНИЕ ФАЙЛА
/**
 * fs.readFileSync(path[, options])
 */

const data = fs.readFileSync('./text.txt');
console.log(data.toString());
console.log('Синхронное чтение данных!');
console.log('И все равно текст из файла будет ниже...');


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');





//// АСИНХРОННАЯ ЗАПИСЬ ФАЙЛА. Полностью перезаписывает данные.
/**
 * fs.writeFile(file, data[, options], callback)
 *  file: путь к файлу
 *  data: записываемые данные
 *  options: дополнительный конфигурационный объект, который определяет следующие свойства:
 *     - encoding: кодировка, которая используется при записи. Значение по умолчанию - "utf8"
 *     - mode: Режим записи в виде числа. Значение по умолчанию - 0o666
 *     - flag: один из системных флагов открытия файла. Значение по умолчанию - "w" (открытие на запись).
 *     - flush: булевое свойство, которое указывает, надо ли данные сразу записывать файл. Значение по умолчанию - false.
 *     - signal: объект AbortSignal, который позволяет прекратить запись
 *     - callback: функция, которая вызывается после записи файла. Если запись закончилась ошибкой, то первый параметр функции содержит информацию об ошибке
*/

const wData = 'Это записано с помощью NodeJS\n';

fs.writeFile('writeText.txt', wData, function(err){
    if(err) {
        return console.log(err);
    }
    console.log('Файл успешно записан');
});


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');





//// СИНХРОННАЯ ЗАПИСЬ ФАЙЛА. Полностью перезаписывает данные.
/**
 * fs.writeFileSync('path', 'text')
 */

const wData2 = 'Очередная история';

fs.writeFileSync('writeSecondText.txt', wData2);


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');




//// ДОЗАПИСАТЬ ДАННЫЕ ФАЙЛА. 
// Можно с помощью двух вышестоящих методов, только с добавлением флага третьим аргументом функции: {flag:"a"}
// Также есть специальные функции

// АСИНХРОННАЯ ДОЗАПИСЬ
/**
 * fs.appendFile(path, 'text', callback(){})
 */

fs.appendFile('appendedText.txt', 'Добавил этот текст асинхронно\n', function(err){
    if(err) return console.log(err);

    console.log('Запись успешна!');
});


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');




// СИНХРОННАЯ ДОЗАПИСЬ // Будет выполнена в первую очередь
/**
 * fs.appendFileSync(path, 'text')
 */

fs.appendFileSync('appendedText.txt', 'Добавил этот текст синхронно\n');




console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');


// ПОЛУЧЕНИЕ ИНФОРМАЦИИ О ФАЙЛЕ
// Асинхронно
/**
 * fs.stat(path[, options], callback(err, stat){})\
 * path - путь к файлу
 * options - необязательный параметр представляет объект, у которого свойство bigint хранит логическое значение и указывает, надо ли возвратить данные в виде числа (при значении true)
 * функция обратного вызова, которая принимает два параметра:
 */

fs.stat('./appendedText.txt', (err, stat) => {
    if (err) return console.log(err);
    console.log(stat.isFile());       // true
    console.log(stat.isDirectory());  // false
    console.log(stat);
});  // Выводом будет сложный объект:
/**
  Stats {
  dev: 16777229,
  mode: 33188,
  nlink: 1,
  uid: 502,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 8638117287,
  size: 274,
  blocks: 8,
  atimeMs: 1724595806249.7285,
  mtimeMs: 1724596460497.251,
  ctimeMs: 1724596460497.251,
  birthtimeMs: 1724595729888.148,
  atime: 2024-08-25T14:23:26.250Z,
  mtime: 2024-08-25T14:34:20.497Z,
  ctime: 2024-08-25T14:34:20.497Z,
  birthtime: 2024-08-25T14:22:09.888Z
}
 */


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');





// Cинхронно
const stat2 = fs.statSync('./text.txt');

console.log(stat2.isFile());  // true
console.log(stat2.isDirectory());  // false
console.log(stat2); // Вывод:
/*
 Stats {
  dev: 16777229,
  mode: 33188,
  nlink: 1,
  uid: 502,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 8638117287,
  size: 384,
  blocks: 8,
  atimeMs: 1724595806249.7285,
  mtimeMs: 1724596799524.8508,
  ctimeMs: 1724596799524.8508,
  birthtimeMs: 1724595729888.148,
  atime: 2024-08-25T14:23:26.250Z,
  mtime: 2024-08-25T14:39:59.525Z,
  ctime: 2024-08-25T14:39:59.525Z,
  birthtime: 2024-08-25T14:22:09.888Z
}
 */


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');




// УДАЛЕНИЕ ФАЙЛА
// Синхронно
fs.unlinkSync('writeText.txt');

// Асинхронно
fs.unlink('writeSecondText.txt', (err) => {
    if(err) return console.log(err);
    console.log('Файл удален!');
});


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log('__ОТСТУП__');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');




// РАБОТА С КАТАЛОГАМИ
// mkdir() - асинхронное создание директории
// mkdirSync() - синхронное создание директории
fs.mkdir("testDir", (error) => {  
    if (error) return console.log(error);
    console.log("Директория создана");
});

// readdir() - асинхронное считывание файлов директории 
// readdirSync() - синхронное считывание файлов директории 
fs.readdir("testDir", (error, files) => {  
    if (error) return console.log(error);
    files.forEach((file) => console.log(file));
});

// rmdir() - асинхронное удаление директории
// rmdirSync() - синхронное удаление директории
fs.rmdir("testDir", (error) => {  
    if (error) return console.log(error);
    console.log("Директория удалена!");
});