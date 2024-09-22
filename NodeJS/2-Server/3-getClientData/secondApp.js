// Второй способ представляет перебор объекта request, который также предоставляет асинхронный итератор для получаемых данных:
const http = require("http");
const fs = require("fs");

http.createServer(async(req, res) => {
    if(req.url === "/user" && req.method === "POST") {
        
        const buffers = []; // буфер для получения данных

        for await (const chunk of req) {
            buffers.push(chunk);   // добавляем в буфер все полученные данные
        }

        // // Получаем текстовые данные: Объединяем все полученные данные и преобразуем их в строку 
        // const data = Buffer.concat(buffers).toString();
        // console.log(data);
        // res.end("Данные успешно получены");
    

        // Получаем данные в формате JSON: предполагается, что клиент отправляет нам данные в JSON формате
        // и с помощью метода JSON.parse мы их можем распарсить
        const user = JSON.parse(Buffer.concat(buffers).toString());
        console.log(user.name, "-", user.age);
        res.end("Данные успешно получены");

    }
    else {
        fs.readFile("secondIndex.html", (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/plain"}); // Обработка ошибок, если не найден
            res.end('Файл не найден!')
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}
    
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));