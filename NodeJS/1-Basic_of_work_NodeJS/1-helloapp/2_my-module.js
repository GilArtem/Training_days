console.log(`It's my module!`);

// Здесь определена константа currentDate, которая хранит текущую дату. 
// Также определена функция printMessage, в которую передается имя пользователя, 
// и в зависимости от текущего часа выводится то или иное сообщение.
const currentDate = new Date();
exports.date = currentDate;  // экспортируем константу currentDate под именем date


// в зависимости от часа выводим определенное сообщение
// экспортируем функцию
exports.printMessage = function (name){
    const hour = currentDate.getHours();
    if(hour > 16)
        console.log("Добрый вечер,", name);
    else if(hour > 10)
        console.log("Добрый день,", name);
    else
        console.log("Доброе утро,", name);
}