const http = require("http");
const fs = require("fs");
    
http.createServer((req, res) => {
    if (req.url == '/user'){
        const user = { name: 'Artem', age: 27 };
        res.end(JSON.stringify(user));
    }
    else fs.readFile('index.html', (err, data) => res.end(data));
}).listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'));