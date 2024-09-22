const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url == '/users.json'){
        const users = [
            {name: 'Artem', age: 27},
            {name: 'Liza', age: 25},
            {name: 'Nobody', age: 0}
        ];
        res.end(JSON.stringify(users));
    }
    else fs.readFile('index.html', (err, data) => res.end(data));
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));