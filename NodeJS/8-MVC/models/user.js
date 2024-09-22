//// ДО ВВЕДЕНИЯ БД
// Здесь располагаются любое хранилище - БД, файлы 
//const users = [];

// module.exports = class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // схранить пользователя в массив
//     save(){
//         users.push(this);
//     }
//     // получить пользователей из массива
//     // getAll определен как статический, поэтому относится в целом ко всему классу User.
//     static getAll(){
//         return users;
//     }
// }




//// ВВОД В ИГРУ БД!
// А вот и она
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Установка схемы
const userSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('User', userSchema);