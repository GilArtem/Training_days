//// Маршрутизация (нативная)

const http = require('http');

http.createServer(function(req, res){
    
    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    if(req.url === "/home" || req.url === '/') {
        res.write('<h2>Home</h2>');
    } 
    else if(req.url === "/about") {
        res.write("<h2>About</h2>");
    }
    else if(req.url === "/contacts") {
        res.write("<h2>Contacts</h2>");
    }
    else {
        res.write("<h2>Not found :(</h2>")
    }

    res.end();
}).listen(3000, function(){
    console.log('Сервер запущен по адресу http://localhost:3000/');
});

// Тут происходит обработка трех маршрутов
// На практике все делается через Express или други фреймворки 
// Тут просто продемонстрирована нативщина 