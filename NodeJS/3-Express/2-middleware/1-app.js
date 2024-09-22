const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log('Mid1');
    next();
});
app.use((req, res, next) => {
    console.log('Mid2');
    next();
});
app.use('/about', (req, res, next) => {
    console.log('AboutMid');
    res.send('ABOUTMID!');
});

app.get('/', (req, res) => {
    console.log('Route "/"');
    res.send('Bye!');
});

app.listen(PORT, () => console.log(`Сервер на пору ${PORT}`));