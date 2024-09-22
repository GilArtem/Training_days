import express from 'express';
import path from 'path';
import { requestTime, logger } from './middlewares.js' 
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT ?? 3000;

// =============================================================================================================================================================================================
// //console.log(app.get('view engine'));                         //  c помощью get метода получаем значение в пременной express (view engine). Получаем undefined
// app.set('view engine', 'ejs')                                 // устанавливаем значение этой переменной
// console.log(app.get('view engine'));                         // Получаем ejs

// //console.log(app.get('views'));                               // Получаем: /Users/gilart/Desktop/Express/views
// app.set('views', path.resolve(__dirname, 'ejs'));             // меняем расположение вьюхи
// console.log(app.get('views'));                               // Получаем: /Users/gilart/Desktop/Express/ejs (Необязательные движения, просто имей в виду) 
// =============================================================================================================================================================================================
// стало возможным убрать после добавления app.use(express.static(path.resolve(__dirname, 'static')));
// app.get('/features', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'));
// });

// стало возможным убрать после добавления app.use(express.static(path.resolve(__dirname, 'static')));
// app.get('/', (req, res) => {
//     //res.send('<h1>Hello, my Kappy!</h1>');                                        // совсем вонючий вариант реализации
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
// });

// убрал 
// app.get('/download', (req, res) => {
//     //console.log(req.requestTime);  // ВЫВОД В КОНСОЛИ: 1711103945118 (пример)
//     res.download(path.resolve(__dirname, 'static', 'demo', 'index.html'));
// });
// =============================================================================================================================================================================================


// Установка шаблонизатора EJS:
app.set('view engine', 'ejs');
// Установка директории для шаблонов:
app.set('views', path.resolve(__dirname, 'ejs')); 


// Добавляем мидлвари
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());                           // учим express работать с JSON
app.use(express.urlencoded({extended: false}));    // учим express работать с JSON

app.use(requestTime); // используем собсвенно созданный мидлварь 
app.use(logger);  // ВЫВОД В КОНСОЛИ: Req.time: 1711104413905 (в цвете, пример)

app.use(serverRoutes); // при переходе по адресу http://localhost:3000/api/server получим объект JSON {test: 13}

app.get('/', (req, res) => {
    res.render('index', { title: 'Main page', active: 'main' })       // эта штука автоматичски ищет файл по указанному названию в папке ejs, которую мы установили через set выше 
});

app.get('/features', (req, res) => {
    res.render('features', { title: 'Features page', active: 'features'})    // active - для подсветки вкладки страницы, на которй находишься (загляни в navbar)
});


app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port ...`);
});
