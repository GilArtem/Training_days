// Тоже самое, что и в v1, только тут мы встраиваем 
// автоматический парсинг в JSON в конвейер обработки запроса с помощью метода:
const express = require('express');
const app = express();

// Устанавливаем автоматический парсинг тела запроса в json
app.use(express.json());

app.post('/user', (req, res) => {
    const user = req.body;
    console.log(user);
    if(!user) return res.sendStatus(400);
    const resText = `Твое имя: ${user.name}   Твой возраст: ${user.age}`;
    // Отправка json:
    // Можно сделать так:
    //res.send(resText);

    // А можно воспользоваться методом response.json() 
    // Он устанавливает для заголовка "Content-Type" значение "application/json", 
    // сериализует данные в json с помощью функции JSON.stringify() 
    // и затем отправляет данные с помощью response.send().
    res.json({ message: resText });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);