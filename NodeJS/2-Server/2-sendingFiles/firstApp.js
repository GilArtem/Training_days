// Нам нужно отправить содержимое файлов about.html и index.html пользователю

//// Первый способ:
// fs.createReadStream() - считываем файл в поток
// pipe() - связываем считанные файлы с потоком записи (с response)

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){

    console.log(`Запрошенный адрес: ${req.url}`);
    // получаем путь после слеша
    const filePAth = req.url.substring(1);   // забираем строчку начиная от второго символа и до конца
    // смотрим, есть ли такой файл
    fs.access(filePAth, fs.constants.R_OK, err => { // проверяет, доступен ли файл по заданному пути (`filePath`) для чтения (параметр `fs.constants.R_OK` указывает, что проверяется доступность на чтение).
        // если ошибка, то отправляем статус 404
        if (err) {
            res.statusCode = 404;
            res.end('Ресурс не найден!');
        }
        else {
            fs.createReadStream(filePAth)  // создает поток для чтения
               .pipe(res);                 // получаем данные из потока. в данный метод передается объект интерфейса stream.Writable или поток для записи.
        }
    });
}).listen(3000, function(){
    console.log("Сервер запущен на порту 3000");
});

// Запускаем приложение по адресам: http://localhost:3000/index.html 
//                                  http://localhost:3000/about.html

// Лицезреем пример отправки файлов html

// НО! Подобным образом можно отправлять самые различные файлы!
// Далее определяем папку public -> style.css



