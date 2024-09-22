const express = require('express');
// Создаем объект приложения express
const app = express();

// Устанавливаем обработчик для маршрута '/'
app.get('/', function(_, res){

    res.end('ThisFuckingMess');
});

// Начинаем прослушивание подклчений 
app.listen(3000, function(){
    console.log('Сервер пашет по адресу http://localhost:3000');
});

