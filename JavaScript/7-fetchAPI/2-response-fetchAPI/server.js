const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if(req.url == "/hello"){
        // res.setHeader для 4-index-has-headers.html
        res.setHeader("Secret-Code", 1234);
        res.end('Fetch на вахте!');
    } 
//    else fs.readFile('1-index-then.html', (err, data) => res.end(data));
//    else fs.readFile('2-index-async-await.html', (err, data) => res.end(data));
//    else fs.readFile('3-index-headers.html', (err, data) => res.end(data));
    else fs.readFile('4-index-has-headers.html', (err, data) => res.end(data));
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));