const http = require('http');
const fs = require('fs');

// Данные, с которыми работает клиент 
// Тут должна быть БД!!
const users = [
    { id: 1, name: "Artem", age: 27 },
    { id: 2, name: "Liza", age: 25 },
    { id: 3, name: "No",  age: 100 },
];

// Обработка полученных от клиента данных
// предполагается, что клиент будет присылать данные в формате json
function getReqData(req) {
    return new Promise(async (resolve, reject) => {
        try{
            const buffers = [];
            for await(const chunk of req) {
                buffers.push(chunk);
            }
            const data = JSON.parse(Buffer.concat(buffers).toString());
            resolve(data);
        } catch (err){
            reject(err);
        }
    });
};

http.createServer(async(req, res) => {

    // Получаем всех пользователей:
    if(req.url === "/api/users" && req.method === 'GET') res.end(JSON.stringify(users));

    // Получение одного пользователя по id:
    else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
        // Получаем id из url:
        const id = req.url.split("/")[3];

        // Получаем пользователя по id:
        const user = users.find((u) => u.id === parseInt(id));

        // Если пользователь найден, то отправляем его:
        if(user) res.end(JSON.stringify(user));
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Пользователь не найден!" }));
        }
    }

    // Удаление пользователя по id:
    else if (req.url.match(/\api\/users\/([0-9]+)/) && method === "DELETE") {

        // Получаем id из url:
        const id = req.url.split("/")[3];

        // Получаем индекс пользоыателя по id:
        const userIndex = users.findIndex((u) => u.id === parseInt(id));
        // Если пользователь найден, удаляем его из массива и отправляем клиенту
        if(userIndex > -1) {
            const user = users.splice(userIndex, 1)[0];
            res.end(JSON.stringify(user));
        }
        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: 'Пользователь не найден' }));
        }
    }

    // Добавление пользователя:
    else if(req.url === "/api/users" && req.method === "POST") {
        try{
            // Получаем данные пользователя
            const userData = await getReqData(req);
            
            // Создаем нового пользователя
            const user = { name: userData.name, age: userData.age };
            // Находим максимальный id
            const id = Math.max.apply(Math, users.map(function(u){ return u.id; }));

            // Увеличиваем его на 1
            user.id += 1;

            // Добавляем пользователя в массив
            users.push(user);
            res.end(JSON.stringify(user));
        } catch(err) {
            res.writeHead(400, { "Cotent-Type": "application/json" });
            res.end(JSON.stringify({ message: "Неккоректный запрос" }));
        }
    }
    // Изменеие пользователя:
    else if(req.url === "/api/users" && req.method === 'PUT') {
        try{
            const userData = await getReqData(req);
            // Получаем пользователя по id
            const user = users.find((u) => u.id === parseInt(userData.id));
            // Если пользователь найден, изменяем его данные и отправляем обратно клиенту
            if(user) {
                user.age = userData.age;
                user.name = userData.name;

                res.end(JSON.stringify(user));
            }
            // если не найден, отправляем статусный код и сообщение об ошибке
            else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Пользователь не найден" }));
            }
        } catch(err) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: 'Неккоректный запрос' }));
        } 
    }
    
    else if (req.url === '/' || req.url === "/index.html") {
        fs.readFile("index.html", (err, data) => res.end(data));
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Ресурс не найден!" }));
    }

}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));