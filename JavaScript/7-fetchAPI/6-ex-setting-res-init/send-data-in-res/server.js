const http = require("http");
const fs = require("fs");
 
http.createServer(async (req, res) => {

    if(req.url == '/user') {
        const buffers = [];  

        // получаем данные из запроса в буфер
        for await (const chunk of req){
            buffers.push(chunk);
        }

        // получаем строковое представление ответа
        let userName = Buffer.concat(buffers).toString();
        userName = userName + ' Gil';
        res.end(userName);
    }
    else fs.readFile('index.html', (err, data) => res.end(data));

}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));