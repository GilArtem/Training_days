// Router позволяет определить дочерние подмаршруты со своими обработчиками 
// относительно некоторого главного маршрута.

const express = require('express');
const app = express();

app.use('/about', (req, res) => res.send('О сайте'));
app.use('/products/create', (req, res) => res.send('Добавление товара'));
app.use('/products/:id', (req, res) => res.send(`Товар ${req.params.id}`));
app.use('/products', (req, res) => res.send('Список товаров'));
app.use('/', (req, res) => res.send('Главная страница'));

app.listen(3000);

// Многие мршруты начинаются с /products.
// Добавляем объект Router 
// смотри в 2-app.js

