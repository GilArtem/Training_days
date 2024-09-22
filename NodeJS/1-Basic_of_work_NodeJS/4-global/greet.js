const currentDate = new Date();

// Установка глобальной переменной date: 
global.date = currentDate;
  
module.exports.printMessage = function(){
    
    // в модуле получаем глобальную переменную username, которая будет установлена из вне. 
    // При этом обратиться к глобальной переменной username мы можем через объект global: global.username, 
    // либо просто через имя username, так как переменная глобальная.
    
    const hour = currentDate.getHours();
    if(hour > 16)
        console.log("Добрый вечер,", global.username);
    else if(hour > 10)
        console.log("Добрый день,", username);
    else
        console.log("Доброе утро,", username);
}