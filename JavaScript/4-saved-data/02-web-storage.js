//// Сохранение данных.
localStorage.setItem('email', 'gilart97@gmail.com');
sessionStorage.setItem('username', 'Artem Gil');

// Трудности могут возникнуть с сохранением сложных объектов
// Например, Здесь мы пытаемся сохранить объект user, при преобразовании в строку мы получим [object Object]
// В этом случае для сохранения можно сериализовать объект в формат JSON:

const user = {
    name: 'Artem',
    age: 27,
    cool: true
};
// Проблема:
// localStorage.setItem("user", user); //user = [object Object]
// Решение:
localStorage.setItem('user', JSON.stringifyuser());


//// Получение данных.
const login = localStorage.getItem('login'); // gilart97@gmail.com

// Если были сохранены нестроковые данные, то может потребоваться их преобразование из строк в исходный тип:
localStorage.setItem("age", 23);
// преобразуем в число
let age = parseInt(localStorage.getItem("age"));
age += 1;
console.log(age); // 24


// преобразуем JSON в объект
const userP = JSON.parse(localStorage.getItem("user"));
console.log(userP.name);  // Artem
console.log(userP.age);  // 27
console.log(userP.cool); // true



//// Удаление.
localStorage.removeItem("email");

//  полное удаление всех объектов:
localStorage.clear();