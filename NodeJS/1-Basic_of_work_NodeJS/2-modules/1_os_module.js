// os-модуль предоставляет информацию об окружении и операционной системе
const os = require('os');

// получаем имя текущего пользователя
const userName = os.userInfo().username;

console.log(userName); // gilart
