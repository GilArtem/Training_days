//// ДИНАМИЧЕСКАЯ ЗАГРУЗКА

const http = require("http");
const fs = require("fs");
     
http.createServer((request, response)=>{
    // получаем путь после слеша, слеш - первый символ в пути
    let filePath = request.url.substring(1);
    // если пустой путь, отправляем главную страницу index.html
    if(!filePath) filePath = "index.html";  
    // в качестве типа ответа устанавливаем html
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    fs.readFile(filePath, (error, data)=>{
        if(error){                              // если ошибка
            response.statusCode = 404;
            response.end("<h1>Resourse not found!</h1>");
        }   
        else{
            response.end(data);
        }
    });
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));