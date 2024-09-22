//// ЗАГРУЖАЕМ КОД HTML через AJAX 

// index.html: главная страница приложения
// home.html: страница с кодом html, который мы будем загружать через AJAX

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // получаем путь посде слеша
    let filePath = req.url.substring(1);

    // если путь пустой, то отправляем на главную страницу
 // if(!filePath) filePath = '1-index-just-str.html';

    if(!filePath) filePath = '2-index-html-load.html';   

    // в качестве типа ответа с сервера устанавливваем html
    res.setHeader('Content-Type', 'text/html; charset=utf-8;');
    fs.readFile(filePath, (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.end("<h1>Ресурс не найден!</h1>");
        }
        else res.end(data);
    });
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));