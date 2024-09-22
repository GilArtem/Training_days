// Передача массивов данных

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Главная страница</h1>');
});

app.use('/about', (req, res) => {
    const usernames = req.query.name;
    let resText = '<ul>';
    for(username of usernames) {
        resText += `<li>${username}</li>`;
    }
    resText += '</ul>';
    res.send(resText);
});

app.listen(3000);

// Запрос: localhost:3000/about?id=13&name=Artem&name=Liza&name=KAPY