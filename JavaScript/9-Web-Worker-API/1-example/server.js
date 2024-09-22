const http = require("http");
const fs = require("fs");
     
http.createServer((req, res)=>{
    let filePath = req.url.substring(1);
    if(!filePath) filePath = 'index.html';
    // в качестве типа ответа устанавливаем html
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    fs.readFile(filePath, (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.end('<h1>Ресурс не найден!</h1>');
        }
        else res.end(data);
    });
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));