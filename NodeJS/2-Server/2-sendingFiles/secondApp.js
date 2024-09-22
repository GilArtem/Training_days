// Нам нужно отправить содержимое файлов about.html и index.html пользователю

//// Второй способ:
// fs.readFile() - чтение данных
// res.end() - отправка данных

const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    console.log('Запрошенный адрес:', req.url);
    // получить путь после слеша 
    const filePath = req.url.substring(1);
    fs.readFile(filePath, function(err, data){
        if(err) {
            res.statusCode = 404;
            res.end('Not found .!.');
        }
        else {
            res.end(data);
        }
    });
}).listen(3000, function(){
    console.log('Сервер стартанул на порту 3000')
});