const http = require('http');
const fs = require('fs');

http.createServer(async(req, res) => {
    if(req.url == "/user") {
        let data = "";
        
        for await(const chunk of req) {
            data += chunk;
        }
        
        // мы ожидаем данные типа {"name":"value","age":1234}
        const user = JSON.parse(data); // парсим строку в json

        // для теста меняем данные полученного объекта
        user.name += ' Gil';
        user.age += 1;
        // Отправляем измененный объект обртно клиенту
        res.end(JSON.stringify(user));
    }
    else fs.readFile('index.html', (_, data) => res.end(data));
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));

// В данном случае на сервера ожидаем, что мы получим объект в формате json, который имеет два свойства - name и age. 
// Для примера сервер меняет значения этих свойств и отправляет измененный объект обратно клиенту.