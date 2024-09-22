// В данном случае мы сосредаточимся на основных моментах работы с данными 
// на примере взаимодействия с SQLite, поскольку SQLite не требует установки сервера и поддерживается из коробки.
// Поэтому установили sqlite3

// ПАМЯТКА! Для работы с postgres `npm install --save pg` ПАМЯТКА!



// Подключение к БД 
const Sequelize = require("sequelize");
// 1.Имя бд; 2.Логин к БД; 3.Пароль; ЭТО ОБЯЗ ПАРАМЕТРЫ
const sequelize = new Sequelize("usersdb2", "root", "123456", {
  // Доп. параметры 
    dialect: "sqlite",      // Диалект языка SQL (При работе с postgres устанавливаем - postgres, соответсвенно )
    host: "localhost",      // адрес сервера
    storage: "metanit.db",  // путь к БД
    port: '"1433',          // sequelize использует этот порт по умоляанию
    define: {
        timestamp: false    // отказываемся от создания полей createdAt и updatedAt
    }
});


//// ОПРЕДЕЛЕНИЕ МОДЕЛЕЙ
// Существует 2 способа:
// 1. Через метод sequelize.define()
// firstUser - название модели. ВАЖНО! если в бд для этой модели нет таблицы, то она будет создаваться.
// ЕЩЕ ВАЖНО! в качестве имени таблицы будет применяться название модели во множественном числе в соответствии с правилами английского языка. (firstUsers)
const User1 = sequelize.define('firstUser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,       // значение столбца в таблице в БД будет автоинкрементироваться
        primaryKey: true,          // соответствующий столбец в таблице будет выполнять роль первичного ключа.
        allowNull: false           // допускает ли поле отсутствие значение
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})


// 2. С помощью class Exemple extands Model {}
class User2 extends Model {};
User2.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,       // значение столбца в таблице в БД будет автоинкрементироваться
        primaryKey: true,          // соответствующий столбец в таблице будет выполнять роль первичного ключа.
        allowNull: false           // допускает ли поле отсутствие значение
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    }, {
        sequelize,
        modelName: 'secondUser'
    });

// ПРИМЕР ЗАПРОСА СОЗДАНИЯ ТАБЛИЦЫ В SQLite:
// CREATE TABLE IF NOT EXISTS `users` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
//     `name` VARCHAR(255) NOT NULL, 
//     `age` INTEGER NOT NULL, 
//     `createdAt` DATETIME NOT NULL, 
//     `updatedAt` DATETIME NOT NULL
// );



//// СИНХРОНИЗАЦИЯ С БД
// Во-первых нужно убедиться, что таблицы в базе данных соответствуют определению наших моделей. 
// Для синхронизации выполняется метод sync:
// Метод sync() синхронизирует структуру базы данных с определением моделей. 
// Например, если для какой-то модели отстуствует соответствующая таблица в БД, то эта таблица создается.
sequelize.sync().then(result => {
    console.log(result);
})
.catch(err => console.log(err));

//Если в бд есть подобная таблица, но она не соответствует определению модели, 
// то мы можем использоать параметр {force: true}, чтобы удалить таблицы и создать 
// их заново, но уже с нужной нам структурой:
// sequelize.sync({force: true}).then(result=>{
//     console.log(result);
//   })
//   .catch(err=> console.log(err));