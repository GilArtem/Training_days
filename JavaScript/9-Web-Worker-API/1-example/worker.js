// получаем данные о веб-воркере
// (замена данных)console.log(self); 

// Это файл задачи веб-воркера
let result = 1;
const intervalID = setInterval(work, 1000);

function work() {
    result = result * 2;
    // (замена данных)console.log("result=", result);
    postMessage(`Result: ${result}`);
    if(result >= 32) clearInterval(intervalID);
};

