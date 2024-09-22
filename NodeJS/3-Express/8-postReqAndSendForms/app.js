const express = require('express');
const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
// Поскольку данные отправляются с помощью формы, то для создания парсера применяется функция urlencoded().
// extended: false указывает, что объект - результат парсинга будет представлять набор пар ключ-значение,
// а каждое значение может быть представлено в виде строки или массива
const urlencodedParser = express.urlencoded({ extended: false });

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.userFName} ${req.body.userLName}- ${req.body.userAge}`);
});

app.listen(3000);