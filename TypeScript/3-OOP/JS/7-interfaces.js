var emp = {
    id: 1,
    name: 'Rock',
    age: 23,
};
var manager = {
    id: 3,
    name: 'Tony',
};
function prUser(user) {
    console.log("id: ", user.id);
    console.log("name: ", user.name);
}
prUser(emp);
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var newUser = buildUser(2, 'Bill');
console.log('id: ', newUser.id);
console.log('name: ', newUser.name);
var p = { x: 10, y: 20 };
console.log(p);
var empl = {
    id: 4,
    name: "Alice",
    sayWords: function (words) {
        console.log("".concat(this.name, " \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \"").concat(words, "\""));
    }
};
empl.sayWords("Привет, как дела?");
var Uzer = (function () {
    function Uzer(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    Uzer.prototype.getFullName = function (surname) {
        return this.name + " " + surname;
    };
    return Uzer;
}());
var tom = new Uzer(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));
var tom1 = new Uzer(1, "Tom", 23);
var tom2 = new Uzer(1, "Tom", 23);
var qwerty = {
    id: 1,
    name: "Sergey",
    age: 30,
};
function printNewInface(inface) {
    console.log("id: ".concat(inface.id, "  name: ").concat(inface.name, "  age: ").concat(inface.age));
}
printNewInface(qwerty);
var Car = (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    };
    Car.prototype.fill = function () {
        console.log("Заправляем машину топливом");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
var simpleBuilder = function (name, surname) {
    return "Mr. " + name + " " + surname;
};
var fullName = simpleBuilder('Artem', 'Gil');
console.log(fullName);
var phones;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
var myPhone = phones[0];
console.log(myPhone);
var colors = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
console.log(colors["red"]);
function personBuilder() {
    var person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    person.auth = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.pass);
    };
    return person;
}
var wey = personBuilder();
wey("Wey", "Chong");
wey.pass = 'qwerty';
wey.auth();
