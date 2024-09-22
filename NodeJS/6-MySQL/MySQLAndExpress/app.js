const mysql = require('mysql2');
const express = require('express');

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    database: 'usersdb2',
    password: '123456'
});

app.set('view engine', 'hbs');

// поллучение списка пользователей 
app.get('/', (req, res) => {
    pool.query("SELECT * FROM users", (err, data) => {
        if(err) return console.log(err);
        else res.render('index.hbs', {
            users: data
        });
    });
});

// возвращаем форму для добавления данных
app.get('/create', (req, res) => {
    res.render('create.hbs');
});

// получаем отправленные данные и добавляем их в БД
app.post('/create', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    pool.query('INSERT INTO users(name, age) VALUES(?, ?)', [name, age], (err, data) => {
        if(err) return console.log(err);
        res.redirect('/');
    });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE id=?', [id], (err, data) => {
        res.render('edit.hbs', {
            user: data[0]
        });
    });
});

// получаем отредактированные данные и отправляем их в БД
app.post('/edit', urlencodedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;

    pool.query("UPDATE users SET name=?, age=? WHERE id=?", [name, age, id], (ere, data) => {
        if(err) return console.log(err);
        res.redirect('/');
    });
});

// получаем id удаляемого пользователя и удаляем его из БД
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id=?', [id], (err, data) => {
        if(err) return console.log(err);
        res.redirect('/');
    });
});

app.listen(3000, () => console.log("Сервер ожидает подключения..."));