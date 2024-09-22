// Строку запроса образуют параметры. 
// После названия каждого параметра после знака равно (=) идет его значение. 
// Друг от друга параметры отделяются знаком амперсанда (&).

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Главная страница</h1>');
});

app.use('/about', (req, res) => {
    const id = req.query.id;
    const userName = req.query.name;
    res.send(`<h1>Информация</h1><p>id: ${id}</p><p>name: ${userName}</p>`);
});

app.listen(3000);

// Запрос: http://localhost:3000/about?id=13&name=Artem