//// Получаем отправленные клиентом данные!
//// Обработка событий data и end объекта request

// Первый способ представляет прослушивание события data обработчик которого получает пришедшие чанки информации. 
// А когда все данные получены, срабатывает событие end. Например, определим следующий простейший сервер:
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url === "/user" && req.method === "POST") {   // почему, если убрать && req.method === "POST", то в консоль не отображается сообщение?
        let data = "";
        req.on("data", chunk => {
            data += chunk;
        });
        req.on("end", () => {
            console.log(data);
            res.writeHead(200, {"Content-Type": "text/plain"}); // Устанавливаем заголовки
            res.end("Данные успешно получены");
        });
    } 
    else {
        fs.readFile("firstIndex.html", (err, data) => {
            if(err) {
                res.writeHead(404, {"Content-Type": "text/plain"}); // Обработка ошибок, если не найден
                res.end('Файл не найден!')
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});  // Устанавливаем заголовки для HTML
                res.end(data);
            }
        });
    }
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"))