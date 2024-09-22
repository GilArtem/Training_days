const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if(req.url == "/hello") res.end('Фечуха');
    else fs.readFile('index.html', (err, data) => res.end(data));
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));