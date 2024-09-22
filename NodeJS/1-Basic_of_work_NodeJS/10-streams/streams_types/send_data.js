// 1) Используя стрмы. 
// Загружаем части файла и отправляем их до тех пор, пока не отправим весь файл.
const getFileWithStream = async(req, res, next) => {
    const fileStream = fs.createReadStream('path to file');

    res.contentType('application/pdf');

    fileStream.pipe(res);
};

// 2) Не используя стримы. 
// Загружаем файл полностью и затем отправляем его.
const getFileWithoutStream = async(req, res, next) => {
    const file = fs.readFileSync('path to file');

    res.contentType('application/pdf');

    res.send(file);
};

// Разница лишь в том, что в первом случае мы загружаем часть файла и отправляем ее, таким образом, не загружая оперативную память сервера. 
// Во втором случае мы сразу загружаем файл целиком в оперативную память и только потом отправляем.

// Создаем с помощью наследования или функции-конструктора:
const { Readable } = require('stream');

// 1.
const MyReadableConstr = new Readable(opt);

// 2.
class MyReadableExtClass extends Readable {
    constructor(opt) {
        super(opt);
    }
};