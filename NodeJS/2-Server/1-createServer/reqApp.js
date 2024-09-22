//// Request. (http.IncomingMessage)

const http = require('http');

http.createServer(function(req, res){
    console.log('Url:', req.url);
    console.log('Тип запроса:', req.method);
    console.log('User-Agent:', req.headers['user-agent']);
    console.log('Все заголовки');
    console.log(req.headers);

    res.end();
}).listen(3000, function(){console.log('Сервер запущен по адресу http://localhost:3000/')});

//// ВЫВОД:

// Url: /
// Тип запроса: GET
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
// Все заголовки
// {
//   host: 'localhost:3000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
//   'sec-ch-ua-mobile': '?0',
//   'sec-ch-ua-platform': '"macOS"',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
//   cookie: 'basketId=s%3A6.I93zxUU7Upktf5vcbIMk7oTu8NGDXWaqtjnnm7e6eEw'
// }