//// Response. (http.ServerResponse)

const http = require('http');

http.createServer(function(req, res){
   
    res.setHeader("UserID", 13); // Установка кастомного заголовка
    res.setHeader("Content-Type", "text/html; charset=utf-8");
   
    res.write('<h2>Салам алейкум</h2>')
    res.write('Text1\n');
    res.write('Text2\n');
   
    res.end('End');
}).listen(3000, function(){
    console.log('Сервер запущен по адресу http://localhost:3000/');
});
