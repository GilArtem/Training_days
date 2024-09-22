const express = require("express");
// Используем контроллеры:
const userController = require('./controllers/userController.js');
const homeController = require('./controllers/homeController.js');


const app = express();

// Определяем роутеры
const userRouter = express.Router();  // для адресов '/users'
const homeRouter = express.Router();  // для адресов  '/', '/about'

//// ДО КОНТРОЛЛЕРОВ
// userRouter.use('/', (req, res) => {
//     res.send('Список пользователей');
// });
// userRouter.use('/create', (req, res) => {
//     res.send('Добавление пользователя');
// });
// общие обработчики
// app.get('/', (req, res) => {
//     res.send('Главная страница');
// });

// app.get('/about', (req, res) => {
//     res.send('О сайте');
// });


//// ПОЛСЕ КОНТРОЛЛЕРОВ 
// ПАМЯТКА! (метод get() === use(). Но можно использовать по контексту операции)
userRouter.get('/', userController.getUsers);
userRouter.use('/create', userController.addUser);
// сопоcтавляем роутер с конечной точкой "/users"
app.use('/users', userRouter);

homeRouter.get('/', homeController.index);
homeRouter.get('/about', homeController.about);
app.use('/', homeRouter);

// Обработка 404 ошибки 
app.use((req, res, next) => {
    res.status(404)
       .send('Not Found')
});

app.listen(3000, () => console.log('Сервер запущен на порту как обычно'));