// users.xml: xml-файл с данными
// index.html: главная страница приложения

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // если запрошены данные по пути "/data", то отправл]ем users.xml
    if(req.url == "/data") fs.readFile('users.xml', (_, data) => res.end(data));
    else fs.readFile('index.html', (_, data) => res.end(data));
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));

