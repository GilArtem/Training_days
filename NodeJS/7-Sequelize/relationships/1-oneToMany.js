// ОДИН КО МНОГИМ:  hasMany()
// Например, 1 компания - много сотрудников


const Sequelize = require("sequelize"); 

// определяем объект Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "metanit.db",
  define: {
    timestamps: false
  }
});

// определяем модель пользователя 
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

// оппределяем модель компании
const Company = sequelize.define("company", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

// Связь один ко многим 
// {onDelete: 'cascade'} - каскадное удаление - при удалении главного объекта удаляются и все связанные с ним объекты.
Company.hasMany(User, {onDelete: 'cascade'});

sequelize.sync({force: true})
         .then(() => console.log("Tables have been created"))
         .catch(err => console.log(err));

//// ИТОГ:
// В базе данных SQLite будут созданы две таблицы, 
// которые описываются следующим SQL-кодом:
// CREATE TABLE IF NOT EXISTS `companies` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
//     `name` VARCHAR(255) NOT NULL
// );
   
// CREATE TABLE IF NOT EXISTS `users` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
//     `name` VARCHAR(255) NOT NULL, 
//     `age` INTEGER NOT NULL, 
//     `companyId` INTEGER REFERENCES `companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
// );


//// ВАЖНО! 
// По умолчанию в зависимой таблице (то есть users) будет создаваться дополнительный столбец, 
// который называтся по имени главной модели плюс суффикс "Id", то есть в данном случае companyId. 
// И через данный столбец строка из companies сможет ссылаться на объект из таблицы users.

//// ДОБАВЛЕНИЕ ЗАВИСИМОЙ МОДЕЛИ (2 способа)
// создаем одну компанию
// 1 способ:
Company.create({ name: "Microsoft"})
       .then(res => {
            // получаем id созданной компании
            const compId = res.id;
            //создаем пару сотрудников для этой компании
            User.create({name:"Tom", age: 39, companyId: compId}).catch(err=>console.log(err));
            User.create({name:"Alice", age: 36, companyId: compId}).catch(err=>console.log(err));
       })
       .catch(err => console.log(err));

// 2 способ (через главную модель createЗАВИСИМАЯ_МОДЕЛЬ()):
// найдем компанию с id=1
Company.findByPk(1)
        .then(company=>{
            if(!company) return console.log("Company not found");
            console.log(company);
            // и добавим для нее один объект
            company.createUser({name:"Bob", age: 43}).catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));


// Для получения всех связанных объектов зависимой модели у главной модели определяется 
// метод по имени getЗАВИСИМАЯ_МОДЕЛЬs() (например, getUsers()). 
// Получим все товары компании с id=1:

Company.findByPk(1)
        .then(company=>{
   
            if(!company) return console.log("Company not found");
            company.getUsers()
        .then(users=>{
            for(user of users)
            console.log(user.name, " - ", company.name);
        }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));