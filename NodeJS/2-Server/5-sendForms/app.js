const http = require("http");
const fs = require("fs");

http.createServer(async(req, res) => {
    if(req.url == "/user") {
        let body = ''; // буфер для получаемых данных

        // получаем данные из запроса в буфер
        for await(const chunk of req) {
            body += chunk;
        }

        // Для параметра name
        let userName = '';
        // Для параметра age
        let userAge = 0;

        // При отправке тело запроса будет содержать данные в формате:
        // имя_поля1=значение1&имя_поля2=значение2&имя_поляN=значениеN
        // поэтому разбиваем запрос на параметры по символу &
        const params = body.split('&');

        // проходим по всем параметрам и определяем их значение
        for(param of params) {
            // разбиваем каждый элемент на имя и значение
            const [paramName, paramValue] = param.split('=');
            if (paramName === 'username') userName = paramValue;
            if (paramName === 'userage') userAge = paramValue;
        }
        res.end(`Your name: ${userName}   Your age: ${userAge}`);
    }

    else fs.readFile('index.html', (err, data) => res.end(data));

}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));