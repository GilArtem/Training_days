const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "metanit.db",
    define: {
        timestamps: false
    }
});

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

//// Добавление данных 
// id - генерируется бд
User.create({
    name: "Tom",
    age: 35
}).then(res => {
    console.log(res);
}).catch(err => console.log(err));

User.create({
    name: 'Bob',
    age: 77
}).then(res => {
    // получаем  добавленный объект, в том числе его id, сгенерированный базой данных:
    const user = {id: res.id, name: res.name, age: res.age}
    console.log(user);
})
  .catch(err => console.log(err));


//// Получение данных
// Получаем все данные findAll():
// необязательный объект {raw:true} 
// позволяет получить непосредственно данные из БД в виде объектов без дополнительных метаданных
User.findAll({ raw: true }).then(users=>{
  console.log(users);
}).catch(err=>console.log(err));

//// Простейшая фильтрация 
// применяется оператор where
// выберем из БД всех пользователей, у которых name="Tom"
User.findAll({ where:{ name: "Tom" }, raw: true })
.then(users=>{
  console.log(users);
}).catch(err=>console.log(err));

//// Получение одного объекта 
// findByPk() (получает объект по первичному ключу)
// получим пользователя с id=2:
User.findByPk(2)
    .then(user => {
        if(!user) return; // если не найден
        else console.log(user.name);
    }).catch(err => console.log(err));

// findOne() (получает один объект по определенному критерию)
// получим одного пользователя с именем Tom
User.findOne({ where: {name: "Tom"} })
    .then(user => {
        if(!user) return;
        else console.log(user.name, user.age);
    }).catch(err => console.log(err));

//// Обновление 
User.update({age: 77}, {
    where: {
        name: 'Tom'
    }
}).then((res) => console.log(res))
  .catch(err => console.log(err));

//// Удаление 
// Для удаления используется метод destroy()
User.destroy({
    where: { name: 'Bob' }
}).then((res) => console.log(res))
  .catch(err => console.log(err));

