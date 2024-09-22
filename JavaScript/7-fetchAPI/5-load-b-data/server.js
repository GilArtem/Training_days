const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url == '/forest.png') fs.readFile('forest.png', (err, data) => res.end(data));
    else fs.readFile('index.html', (err, data) => res.end(data));
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));