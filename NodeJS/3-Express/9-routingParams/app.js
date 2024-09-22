const express = require('express');
const app = express();

// Запрос: localhost:3000/products/13
app.get('/products/:productId', (req, res) => res.send('productId: ' + req.params['productId']));

// более сложные комбинации параметров
// Запрос: localhost:3000/categories/phone/prods/iphone16
app.get('/categories/:categoryId/prods/:prodId', (req, res) => {
    const catId = req.params['categoryId'];
    const pId = req.params['prodId'];
    res.send(`Категория: ${catId}  Товар:${pId}`);
});

// или так
// Запрос: localhost:3000/book/NewBook.js
app.get('/book/:pageName.:pageExt', (req, res) => {
    const pageName = req.params['pageName'];
    const pageExt = req.params['pageExt'];
    res.send(`Запрошенный файл: ${pageName}.${pageExt}`);
});

app.listen(3000);