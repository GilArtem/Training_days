const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    if(req.url == "/hello") {
        res.statusCode = 302; // код временной переадресации
        res.setHeader('Location', '/newpage'); // переадресация на адрес localhost:3000/newpage
        res.end('This is a new page');
    }
    else fs.readFile("5-index-redirect.html", (error, data) => response.end(data));
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));