const http = require('http');
const fs = require('fs');

http.createServer((_, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err){
            return `Error: ${err}`;
        }
        res.end(data);
    }
)}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));