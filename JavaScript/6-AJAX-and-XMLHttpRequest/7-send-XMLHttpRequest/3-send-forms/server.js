// С помощью объекта FormData можно отправить данные формы из кода JavaScript на сервер через Ajax.
const http = require('http');
const fs = require('fs');

http.createServer(async (req, res) => {
    if(req.url == "/user"){
        
        let body = ""; // буфер для получения данных
        
        // получаем данные из запроса в буфер
        for await(const chunk of req){
            body += chunk;
        }

        // Для параметра name
        let userName = "";
        // Для параметра age
        let userAge = 0;

        // Регулярное выражение для поиска названия и значения поля формы
        const exp = /Content-Disposition: form-data; name="([^\"]+)\"\r\n\r\n(\w*)/g;
        let formElement;
        // проходим по телу запроса регулярным выражением и извлекаем все элементы формы и их значения:
        // ВНИМАНИЕ! это естественно неполноценный парсинг, который не учитывает многие моменты (отправку массивов, файлов и т.д.) 
        // и приведен только для демонстраниции ajax-запросов. 
        while ((formElement = exp.exec(body))){
            paramName = formElement[1];  // получаем имя элемента формы
            paramValue = formElement[2]; // получаем значение элемента формы
            console.log(paramName, ":", paramValue); // выводим на консоль
            if(paramName === "name") userName = paramValue;
            if(paramName === "age") userAge = paramValue;
        }
        res.end(`Your name: ${userName}   Your age: ${userAge}`);
    }
    else fs.readFile("2-index.html", (_, data) => res.end(data));
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));