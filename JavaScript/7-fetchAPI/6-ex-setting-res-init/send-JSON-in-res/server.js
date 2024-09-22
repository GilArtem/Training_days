const http = require('http');
const fs = require('fs');

http.createServer(async(req, res) => {
    if(req.url == '/user'){
        const buffers = [];
        for await (const chunk of req){
            buffers.push(chunk);
        }

        const data = Buffer.concat(buffers).toString();
        const user = JSON.parse(data); // парсим строку в JSON

        // изменяем данные полученного объекта
        user.name += ' Gil';
        user.age += 100;

        // отправляем измененный объект обратно клиенту
        res.end(JSON.stringify(user));
    }
    else fs.readFile('index.html', (err, data) => res.end(data));
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));