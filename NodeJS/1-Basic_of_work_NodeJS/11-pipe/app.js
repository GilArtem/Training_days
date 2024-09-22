// Хотим скопировать содержимое из файла hello.txt в файл some.txt
const fs = require('fs');

const readableStream = fs.createReadStream('./hello.txt');
const writeableStream = fs.createWriteStream('./some.txt');

readableStream.on('data', function(chunk){
    writeableStream.write(chunk);
});

// Данный код вполне работоспособен, и после запуска файла в папке проекта появится новый файл some.txt.

// Однако задача записи в поток данных, считанных из другого потока, 
// является довольно распространенной, и в этом случае pipes или каналы позволяют нам сократить объем кода:

const writeableStream2 = fs.createWriteStream('./some2.txt');

readableStream.pipe(writeableStream2);


// Рассмотрим другую проблему - архивацию файла. 
// Здесь нам надо сначала считать файл, затем сжать данные и в конце записать сжатые данные в файл-архив. 
// Pipes особенно удобно применять для подобного набора операций:

// Модуль для архивации данных
const zlib = require('zlib');

const writeableStream3 = fs.createWriteStream('hello.txt.gz');
const gzip = zlib.createGzip();

// Каждый метод pipe() в цепочке вызовов возвращает поток для чтения, к которому опять же можно применить метод pipe() для записи в другой поток.
readableStream.pipe(gzip)
              .pipe(writeableStream3);
