const express = require('express');
const logger = require('./0-logger');
const app = express();

app.get('/changeLevel', (req, res) => {
    const { level } = req.body;
    // проверяем, что уровень логгирования задан, а затем изменяем его
    logger.level = level;
});

app.listen(3000, () => console.log('http://localhost:3000'));