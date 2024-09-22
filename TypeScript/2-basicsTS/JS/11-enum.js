var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season.Summer;
console.log(current);
current = Season.Autumn;
var Season1;
(function (Season1) {
    Season1[Season1["Winter"] = 0] = "Winter";
    Season1[Season1["Spring"] = 1] = "Spring";
    Season1[Season1["Summer"] = 2] = "Summer";
    Season1[Season1["Autumn"] = 3] = "Autumn";
})(Season1 || (Season1 = {}));
;
var Season2;
(function (Season2) {
    Season2[Season2["Winter"] = 5] = "Winter";
    Season2[Season2["Spring"] = 6] = "Spring";
    Season2[Season2["Summer"] = 7] = "Summer";
    Season2[Season2["Autumn"] = 8] = "Autumn";
})(Season2 || (Season2 = {}));
;
var Season3;
(function (Season3) {
    Season3[Season3["Winter"] = 4] = "Winter";
    Season3[Season3["Spring"] = 8] = "Spring";
    Season3[Season3["Summer"] = 16] = "Summer";
    Season3[Season3["Autumn"] = 32] = "Autumn";
})(Season3 || (Season3 = {}));
;
var curr = Season1[2];
console.log(curr);
var Season4;
(function (Season4) {
    Season4["Winter"] = "\u0417\u0438\u043C\u0430";
    Season4["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season4["Summer"] = "\u041B\u0435\u0442\u043E";
    Season4["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season4 || (Season4 = {}));
;
var curr4 = Season4.Summer;
console.log(curr4);
var Season5;
(function (Season5) {
    Season5[Season5["Winter"] = 1] = "Winter";
    Season5["Spring"] = "\u0412\u0435\u0441\u043D\u0430";
    Season5[Season5["Summer"] = 3] = "Summer";
    Season5["Autumn"] = "\u041E\u0441\u0435\u043D\u044C";
})(Season5 || (Season5 = {}));
;
var current5 = Season5.Summer;
console.log(current5);
console.log(Season5.Autumn);
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    }
    else {
        console.log("Добрый вечер");
    }
}
var current6 = DayTime.Morning;
welcome(current6);
welcome(DayTime.Evening);
welcome(1);
var DayTimeMessage;
(function (DayTimeMessage) {
    DayTimeMessage["Morning"] = "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E";
    DayTimeMessage["Evening"] = "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440";
})(DayTimeMessage || (DayTimeMessage = {}));
;
function welcomeBack(message) {
    console.log(message);
}
var mes = DayTimeMessage.Morning;
welcomeBack(mes);
welcomeBack(DayTimeMessage.Evening);
var DayTimeMessage2;
(function (DayTimeMessage2) {
    DayTimeMessage2["Morning"] = "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E";
    DayTimeMessage2["Evening"] = "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440";
})(DayTimeMessage2 || (DayTimeMessage2 = {}));
;
function wel(message) {
    console.log(message);
}
var mes2 = DayTimeMessage2.Morning;
console.log(mes2);
wel(DayTimeMessage2.Evening);
