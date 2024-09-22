const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile("index.html", function(err, data) {

        if(err) {
            res.statusCode = 500;
            res.end('Server error!');
        }
        else {
            const message = 'Learning Node.JS';
            const header = 'Main string';
            const dataText = data.toString()
                                 .replace(/{header}/g, header)
                                 .replace(/{message}/g, message);
            res.end(dataText); 
        }
    })
}).listen(3000);

// Здесь получаем содержимое файла, преобразуем в текст и заменяем плейсхолдеры на конкретный текст 
// с помощью метода data.toString().replace() и переданных в него регулярных выражений.

// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ:
// - / ... / — это синтаксис для обозначения регулярного выражения в JavaScript и других языках программирования.
// - {header} — это строка, которую мы ищем. Здесь фигурные скобки просто часть строки, а не специальные символы (так как они не экранированы).
// - g — это флаг, обозначающий "глобальный" поиск, то есть поиск всех совпадений в строке, а не только первого.
