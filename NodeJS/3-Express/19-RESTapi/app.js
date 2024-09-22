// В ЭТОЙ РЕАЛИЗАЦИИ НЕ РАБОТАЕТ ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЯ!!
// ОШИБКА СО СТОРОНЫ КЛИЕНТА public -> index.html

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Условная бд
const users = [];
// Для установки идентификаторов
let id = 1;

// Вспомогательная функция для поиска индекса пользователя по id
function findUserIndexById(id){
    for(let i = 0; i < users.length; i++){
        if(users[i].id == id) return i;
    }
    return -1;
};

// Получить всех пользователей
app.get('/api/users', function(req, res){
    res.send(users);
});

// Получить одного пользователя
app.get('/api/users/:id', function(req, res){
    const id = req.params.id;
    // ищем пользователя в массиве по id
    const index = findUserIndexById(id);
    // отправка пользователя
    if(index > -1){
        res.send(users[index]);
    }
    else{
        res.status(404).send('Пользователь не найден');
    }
});

// Отправка данных
app.post('/api/users', (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {name: userName, age: userAge};

    // Присваиваем идентификатор из переменной id и увеличиваем ее на 1
    user.id = id++;

    // Добавляем пользователя в массив
    users.push(user);
    res.send(user);
});

// Удаление пользователя по id
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const index = findUserIndexById(id);

    if(index > -1){
        // удаление пользователя
        const user = users.splice(index, 1)[0];
        res.send(user);
    }
    else res.status(404).send('Пользователь не найден');
});

// Изменение пользователя 
app.put('/api/users/:id', (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;

    const index = findUserIndexById(id);
    if(index > -1){
        // Меняем данные пользователя
        const user = users[index];
        user.age = userAge;
        user.name = userName;
        res.send(user);
    }
    else res.status(404).send('Пользователь не найден');
});

app.listen(3000, () => console.log('Сервер ожидает подключения...'));
