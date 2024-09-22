// Здесь определена стандартная функция конструктора User, которая принимает два параметра. 

function User(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
};

User.prototype.sayPrivet = function() {
    console.log(`Привет, мое имя ${this.name}`);
};

// При этом весь модуль теперь указывает на эту функцию конструктора:
module.exports = User;