const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // Eсли пришел запрос по пути "/hello" (условно к ресурсу "/hello"), то оправляем в ответ с помощью метода response.end() текст "Привет с Большого Бадуна"
    if (req.url === '/hello') res.end('Привет с Большого Бадуна');
    
    // Если запрос пришел к какому-то другому ресурсу, то отправляем файл 1-index.html (событие load)
//  else fs.readFile('1-index-load.html', (err, data) => res.end(data));

    // Событие, возникающее при изменении св-ва readyState (событие readystatechange)
    else fs.readFile('2-index-readystatechange.html', (err, data) => res.end(data));

}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));
