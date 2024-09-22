const express = require('express');
const app = express();

// Создаем парсер для данных в формате json
const jsonParser = express.json();

app.post('/user', jsonParser, (req, res) => {
    const user = req.body;
    console.log(user);
    if(!user) return res.sendStatus(400);
    const resText = `Твое имя: ${user.name}  Твой возраст: ${user.age}`;
    res.send(resText); 
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);