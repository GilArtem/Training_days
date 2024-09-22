const http = require('http');
const fs = require('fs');

http.createServer(async(req, res) => {
    if(req.url == "/user"){
        let userName = "";  // получаем данные в строку
        // получаем данные из запроса и добавляем их в строку 
        for await (const chunk of req){
            userName += chunk;
        }
        userName = userName + " Gil";
        res.end(userName);
    }
    else fs.readFile('index.html', (_, data) => res.end(data));
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));