const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema(
    {
    name: String,
    age: Number,
    // Валидация данных
    motherName: {
        type: String,
        required: true,  // требует обязательного наличия для св-ва
        minlength: 3,    // минимальная дляна строк
        mxlength: 20     // максимальная дляна строк
    },
    // Валидация данных
    motherAge: {
        type: Number,
        required: true,
        min: 20,
        max: 100
    },
    job: {
        type: String,
        default: 'NoJob'  // По умолчанию 
    },
    salary: {
        type: Number,
        default: 0
    },
},
{versionKey: false}                // Избавляемся от версионного поля в БД (__v)
);

// // определяем модель User используя схему 
const User = mongoose.model("User", userScheme);
// // создаем объект модели User
// const user = new User({ name: "Bill", age: 41});
// const user = new User({ name: "Artem", age: 27, job: "Middle NodeJS developer", salary: 130000 });
// // Проверяем валидность 
// // Будет ошибкой
// //const user = new User({ name: 'Troy', age: 13, motherName: 'M', motherAge: 19 });

// Будет все четко
const user = new User({ name: 'Bob', age: 23, motherName: "Qw", motherAge: 33, job: 'Human', salary: 12 });

async function main() {
    // подключемся к базе данных
    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");
     
    // сохраняем модель user в базу данных
    await user.save();
    console.log("Сохранен объект", user);
 
    // Также сохранить объект мы можем с помощью .create()
    // const user = await User.create({ name: 'Who', age: 33})
    // console.log(user);

    // // отключаемся от базы данных
    // await mongoose.disconnect();
}
// запускаем подключение и взаимодействие с базой данных
main().catch(console.log).finally(async()=>await mongoose.disconnect());
