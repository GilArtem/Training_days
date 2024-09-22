const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url == '/hello') res.end('Fetch в здании');
   
    // посторено на then() и catch()
//  else fs.readFile('1-index-then.html', (err, data) => res.end(data));
    
    // построено на async/await
    else fs.readFile('2-index-async-await.html', (err, data) => res.end(data));
}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));