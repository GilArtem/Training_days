const express = require('express');
const app = express();

// можно задать абсолютный путь
//app.use(__dirname + '/public');

// а можно вот так
//app.use('/static', express.static('public'));

// или вот так
app.use(express.static('public'));
app.use('/', (req, res) => {
    res.send('<h1>Главная страница</h1>');
})

app.listen(3000);

// чтобы получить Эбаут страницу, выполняем запрос: "http://localhost:3000/about.html":