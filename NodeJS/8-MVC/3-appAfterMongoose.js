const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const app = express();


//app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль

// ПОСЛЕ ДОБАВЛЕНИЯ VIEWS И MODELS
app.set('view endine', 'hbs');
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);
app.use('/', homeRouter);

app.use((req, res, next) => res.status(404).send('Not Found'));

// ПОСЛЕ ДОБАВЛЕНИЯ MONGOOSE
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/usersdb');
        app.listen(3000, ()=>console.log("Сервер запущен и ожидает подключения..."));
    } catch(err){ 
        return console.log(err);
    }
}

// Запускаем приложение 
main();

// Прослушиваем прерывание работы программы (ctrl-c)
process.on('SIGINT', async() => {
    await mongoose.disconnect();
    console.log(' Приложение завершило работу');
    process.exit();
});

