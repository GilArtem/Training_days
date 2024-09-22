// Обычно для каждого мидлваря создается отдельный файл (декомпозиция, мать ее)
// мидварь можно создавать через функцию, а можно и через константу
// мидлвари вызываются последовательно 
import colors from 'colors'


export function requestTime (req, res, next){  // добавляем время запроса
    req.requestTime = Date.now();
    next(); // функция, говорящая JS, что конкретная варь закончила работу
};  

export function logger(req, res, next){ // ВЫВОД В КОНСОЛИ: Req.time: 1711104413905 (в цвете)
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
    next();
};
