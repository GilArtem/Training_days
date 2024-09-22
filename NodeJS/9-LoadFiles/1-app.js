//// ПЕРВЫЙ ВАРИАНТ ИСПОЛНЕНИЯ (MULTER ВСТРОЕН В ГЛОБАЛЬНЫЙ КОНВЕЙЕР ОБРАБОТКИ ЗАПРОСОВ):
// const express = require("express");
// const multer  = require("multer");
  
// const app = express();

// app.use(express.static(__dirname));
// // добавляется в виде компонента middleware.
// // dest указывает на путь, по которому будет загружаться файл (Если внутри проекта такой папки нет, то она автоматически будет создана.)
// // single() указывает, что загружаться будет один файл.
// app.use(multer({dest: "uploads"}).single('filedata'));
// app.post('/upload', (req, res, next) => {
//     const filedata = req.file;
//     console.log(filedata);
//     if(!filedata) res.send('Ошибка при загрузке файла');
//     else res.send('Файл загружен');
// });

// app.listen(3000);


// // ТАКОГО ТИПА ПРИДУТ ДАННЫЕ В КОНСОЛЬ:
// // {
// //     fieldname: 'filedata',
// //     originalname: 'Ð\x93Ð¸Ð»Ñ\x8C Ð\x90Ñ\x80Ñ\x82ÐµÐ¼ Ð\x9EÐ»ÐµÐ³Ð¾Ð²Ð¸Ñ\x87.pdf',
// //     encoding: '7bit',
// //     mimetype: 'application/pdf',
// //     destination: 'uploads',
// //     filename: '59dc5757257b473861ff569f3f006491',
// //     path: 'uploads/59dc5757257b473861ff569f3f006491',
// //     size: 42048
// // }




//// ВТОРОЙ ВАРИАНТ ИСПОЛНЕНИЯ (MULTER ВСТРОЕН ДЛЯ ОТДЕЛЬНОЙ ФУНКЦИИ ОБРАБОТКИ ЗАПРОСОВ)
const express = require("express");
const multer  = require("multer");
  
const app = express();
 
const upload = multer({dest:"uploads"});
app.use(express.static(__dirname));
 
app.post("/upload", upload.single("filedata"), function (req, res, next) {
   
    let filedata = req.file;
 
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

app.listen(3000);