const Sequelize = require('sequelize');
const express = require('express');

const app = express();
//// ВАЖНО!
// express.urlencoded(): Это встроенный middleware в Express.js, 
// который обрабатывает данные, приходящие в запросах. 
// Эта функция парсит данные из тела запроса и делает их доступными в объекте req.body.
// В частности, это работает для форматов, которые оформлены как application/x-www-form-urlencoded,
// что обычно происходит, когда форма в HTML отправляется по методу POST.
const urlencodedParser = express.urlencoded({extended: false});
// { extended: false }: Этот параметр определяет, как именно парсить URL-кодированные данные. 
// Если extended установлен в true, то библиотека qs будет использоваться для обработки данных, 
// что позволяет парсить вложенные объекты. Если установлен в false, Express использует встроенный 
// модуль querystring, который не поддерживает вложенные объекты. Обычно false достаточно для большинства простых форм.

// определяем объект Sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "metanit.db",
    define: {
      timestamps: false
    }
});

// определяем модель User
const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
});

app.set('view engine', 'hbs');

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(()=>{
    app.listen(3000, function(){
      console.log("Сервер ожидает подключения...");
    });
}).catch(err=>console.log(err));


// получение данных
app.get('/', (req, res) => {
    User.findAll({ raw: true })
        .then(data => {
            res.render('index.hbs', {
                users: data
            });
        }).catch(err => console.log(err));
});

app.get('/create', (req, res) => {
    res.render('create.hbs');
});


// добавление данных
app.post('/create', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;

    User.create({ name: userName, age: userAge })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
});


// получаем объект по id для редактирования
app.get('/edit/:id', (req, res) => {
    const userid = req.params.id;
    User.findAll({ where: {id: userid}, raw: true })
        .then(data => {
            res.render('edit.hbs', {
                user: data[0]
            });
        })
        .catch(err => console.log(err));
});


// обновление данных в БД
app.post('/edit', (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const username = req.body.name;
    const userage = req.body.age;
    const userid = req.body.id;

    User.update({name: username, age: userage}, {where: {id: userid}})
        .then(() => {res.redirect('/')})
        .catch(err => console.log(err));
});


// удаление данных
app.delete('/delete/:id', (req, res) => {
    const userid = req.params.id;

    User.destroy({where: {id: userid}})
        .then(() => {res.redirect('/')})
        .catch(err => console.log(err));
});

