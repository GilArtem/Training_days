const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res) => {
    // отправляем файл с помощью sendFile()
    // с помощью __dirname получаем абсолютный путь к 
    // текущему проекту и затем добавляем к нему путь к 
    // файлу в рамках текущего проекта.
    res.sendFile(__dirname, '/index.html');
});

// отправляем пользователю определенный статусный код с некоторым сообщением по умолчанию.
// это сообщение 'Not Found'
app.use('/home/foo/bar', (req, res) => res.sendStatus(404));

// если мы хотим изменить сообщение по умолчанию, тогда пишем так
app.use('/home/fo/br', (req, res) => res.status(404).send('Ресурс не найден!'))

app.listen(PORT, () => console.log(`Сервер на пору ${PORT}`));