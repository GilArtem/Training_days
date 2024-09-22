const express = require("express");
const multer  = require("multer");
  
const app = express();

// Функция для настройки сохранения файлов
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{        // определяет место для сохранения загруженных файлов - в данном случае папка "uploadsTo".
        cb(null, "uploadsTo");
    },
    filename: (req, file, cb) =>{           // определяет имя для загруженных файлов - в данном случае это непосредственно имя загруженного файла - file.originalname.
        cb(null, file.originalname + '-' + Date.now());  
    }
});

// Фильтр. Будем принимать только файлы изображений:
// req (объект запроса)
// file (загруженный файл)
// функция cb()
const filterFile = (req, file, cb) => {
    if(file.mimetype === 'image/png' ||
       file.mimetype === 'image/jpg' ||
       file.mimetype === 'image/jpeg'
    ){
        // Если MIME-тип подходит, то есть мы хотим сохранить данный файл, то в качестве второго параметра в функцию cb передается true.
        cb(null, true);
    }
    else {
        // В этом случае при получении multer не устанавливает значение req.file, то есть фактически оно равно undefined.
        cb(null, false);
    }
};

app.use(express.static(__dirname));
 
app.use(multer({storage: storageConfig, fileFilter: filterFile}).single("filedata"));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.file;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.listen(3000, ()=>{console.log("Server started");});