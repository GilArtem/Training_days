const PORT = 3000;
// поключение express
const express = require('express');

// создаем объект приложения 
const app = express();

// определяем обработчик для маршрута 
app.get('/', (req, res) => {
    
    // отправляем ответ
    res.send('<h2>HOME</h2>');
});

// поределим обработчики по новым маршрутам
app.get('/about', (req, res) => res.send('<h2>ABOUT</h2>'));
app.get('/contacts', (req, res) => res.send('<h2>CONTACTS</h2>'));

// начинаем прослушивать подключение
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`)); 
