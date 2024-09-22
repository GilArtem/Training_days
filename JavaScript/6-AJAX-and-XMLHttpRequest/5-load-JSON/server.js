const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // если запрошены данные "/data", то выводим data.json
    if(req.url == "/data") fs.readFile("data.json", (_, data) => res.end(data));
    else fs.readFile("index.html", (_, data) => res.end(data));
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));

