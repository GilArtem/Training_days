var userId = null;
function printIds(id) {
    if (id === null) {
        console.log('пользователь отсутствует');
    }
    else {
        console.log("id \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(id));
    }
}
printIds(userId);
userId = 37;
printIds(userId);
var header = document.getElementById("header");
header.innerText = 'Hello TS';
