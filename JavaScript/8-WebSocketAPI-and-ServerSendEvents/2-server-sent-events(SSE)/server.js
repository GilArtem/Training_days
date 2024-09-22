const http = require('http');
const fs = require('fs');

// Данные для отправки клиенту 
const messages = ['Привет', 'Как дела?', 'Че кого?', 'Ты че ублюдок?', 'Чао!'];

http.createServer((req, res) => {
    //  если запрос SSE
    if(req.url == '/events'){ 
        if(req.headers.accept && req.headers.accept === 'text/event-stream'){
            sendEvent(res);
        }
        else {
            res.writeHead(400);
            res.end('Bad Request');
        }
    }
    // в остальных случаях отправляем страницу index.html
    else{ 
        fs.readFile('index.html', (_, data) => res.end(data));
    }
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));

// Отправляем сообщение клиенту 
function sendEvent(res){
    // формируем заголовки
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Catche-Control": "no-cache",
        "Connection": "keep-alive"
    });

    // определяем идентификатор последнего события
    const id = (new Date()).toLocaleTimeString();

    // раз в 5 секунд отправляем одно сообщение
    setInterval(() => { createServerSendEvent(res, id); }, 2000);
};

// Отправляем данные клиенту
function createServerSendEvent(res, id){
    // генерируем случайное число - индекс для массива messages
    const index = Math.floor(Math.random() * messages.length);
    const message = messages[index];
    res.write('id: ' + id + '\n');
    res.write('data: ' + message + '\n\n');
};