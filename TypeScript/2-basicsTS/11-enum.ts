enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;

console.log(current);       // 2

current = Season.Autumn;    // изменение значения

// По умолчанию константы перечисления, как в примере выше, представляют числовые значения.
// Фактически Season = Season1
enum Season1{ Winter=0, Spring=1, Summer=2, Autumn=3 };

enum Season2 { Winter=5, Spring, Summer, Autumn };           // 5, 6, 7, 8

enum Season3 { Winter=4, Spring=8, Summer=16, Autumn=32 };   // 4, 8, 16, 32

// Полуяаем текстовое значение:
let curr: string = Season1[2]; 
console.log(curr); // Summer


//// СТРОКОВЫЕ ПЕРЕЧИСЛЕНИЯ 
enum Season4 { 
    Winter = "Зима", 
    Spring = "Весна",
    Summer = "Лето", 
    Autumn = "Осень"
};

let curr4: Season4 = Season4.Summer;
console.log(curr4);   // Лето



//// СМЕШАННЫЕ ГЕТЕРОГЕННЫЕ ПЕРЕЧИСЛЕНИЯ (СТРОКИ И ЧИСЛА)
enum Season5 { 
    Winter = 1, 
    Spring = "Весна",
    Summer = 3, 
    Autumn = "Осень"
};

let current5: Season5 = Season5.Summer;
console.log(current5);           // 3
console.log(Season5.Autumn);     // Осень



//// ПЕРЕЧИСЛЕНИЯ В ФУНКЦИЯХ
enum DayTime { 
    Morning, 
    Evening
};

// Можно определить параметр функции как числовой (результат будет тот же)
// finction welcome(dayTime: number){
function welcome(dayTime: DayTime){
     
    if(dayTime === DayTime.Morning){
        console.log("Доброе утро");
    }
    else{
        console.log("Добрый вечер");
    }
}
let current6: DayTime = DayTime.Morning;
welcome(current6);           // Доброе утро
welcome(DayTime.Evening);   // Добрый вечер
welcome(1); // Добрый вечер


// Пример параметра-строкового перечисления
enum DayTimeMessage { 
    Morning = "Доброе утро", 
    Evening = "Добрый вечер"
};

function welcomeBack(message: DayTimeMessage){
    console.log(message);
}

let mes: DayTimeMessage = DayTimeMessage.Morning;
welcomeBack(mes); // Доброе утро
welcomeBack(DayTimeMessage.Evening) // Добрый вечер


// При использовании строковых перечислений в отличие от числовых мы не можем передать переметру произвольную строку!
// welcome("Привет, ты спишь?")

// В то же время если параметр представляет тип string, то такому параметру можно передавать как строки, так и константы строкового перечисления:
enum DayTimeMessage2{
    Morning = "Доброе утро", 
    Evening = "Добрый вечер"
};

function wel(message: string) {
    console.log(message);
}

let mes2: DayTimeMessage2 = DayTimeMessage2.Morning;

console.log(mes2);  // Доброе утро
wel(DayTimeMessage2.Evening);    // Добрый вечер