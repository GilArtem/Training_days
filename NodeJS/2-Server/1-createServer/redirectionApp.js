//// Переадресация.
// Выполним переадресацию с адреса localhost:3000/ на адрес localhost:3000/newpage

const http = require('http');

http.createServer(function(req, res){

    res.setHeader("Content-Type", "text/html; charset-utf-8");

    if (req.url === '/'){
        res.statusCode = 302; // временная переадресация на адрес localhost:3000/newpage
        res.setHeader("Location", "/newpage");
    }
    else if (req.url == "/newpage"){
        res.write('<h2>New address</h2>');
    }
    else {
        res.statusCode = 404; // адрес не найден
        res.write("<h2>Not found :(</h2>");
    }

    res.end();
    
}).listen(3000);