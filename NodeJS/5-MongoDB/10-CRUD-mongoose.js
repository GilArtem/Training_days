const mongoose = require("mongoose");
const Schema = mongoose.Schema;
   
const userScheme = new Schema({name: String, age: Number});
const User = mongoose.model("User", userScheme);

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/usersdb");

    // ПОЛУЧИТЬ
    // получаем все объекты из БД
    // Если в качестве критерия фильтрации передаются пустые фигурные скобки ({}), то возвращаются все объекты:
    const users = await User.find({});
    console.log(users);

    // Получаем пользователей с именем Tom
    //const users = await User.find({name: "Tom"});

    // возвращает один объект
    //const user = await User.findOne({name: "Bill"});

    // возвращает документ с определенным идентификатором:
    // const id = "6377c7a46fa33e19ac7a7c41";
    // const user = await User.findById(id);

    // УДАЛИТЬ
    // удаляем все объекты из БД, у которых age=41
    const result = await User.deleteMany({age:41});
    console.log(result);

    // удаления одного документа будет аналогичным:
    // const result = await User.deleteOne({name:"Tom"})
    // console.log(result);    // { acknowledged: true, deletedCount: 1 }

    // Также для удаления одного документа можно использовать метод findOneAndDelete():
    // const user = await User.findOneAndDelete({name:"Sam"})
    // console.log(user);

    // И частная разновидность этого метода - удаление по полю _id в виде метода findByIdAndDelete():
    // const id = "6377c72806fb915eb6621ffd";
    // const user = await User.findByIdAndDelete(id)
    // console.log(user);

    // ИЗМЕНИТЬ
    // У всех документов изменяем значение поля name с "Tom" на "Tom Smith" 
    // Аналогично работает updateMany()
    // const result = await User.updateOne({name: "Tom"}, {name: "Tom Smith"})
    // console.log(result);

    // Нередко для обновления используется фильтрация по _id
    // const id = "6377ce352461051cdc78252a";
    // const user = await User.findByIdAndUpdate(id, {name: "Sam", age: 25});
    // console.log("Обновленный объект", user);

    //  Если же нам надо получить документ уже в измененном состоянии, то в метод findByIdAndUpdate 
    // необходимо передать в качестве третьего параметра объект {new: true} (при значении false возвращается старая копия):
    // const id = "6377ce352461051cdc78252a";
    // const user = await User.findByIdAndUpdate(id, {name: "Mike", age: 21}, {new: true});
    // console.log("Обновленный объект", user);

    // Если нам необходимо обновить и возвратить обновленный документ не только по id, а вообще по любому критерию, 
    // то можно использовать метод findOneAndUpdate:
    // const user = await User.findOneAndUpdate({name: "Mike"}, {name: "Alex", age:24}, {new: true});
    // console.log("Обновленный объект", user);


}

main().catch(console.log).finally(async() => await mongoose.disconnect());
