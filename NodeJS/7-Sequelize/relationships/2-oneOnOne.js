// СВЯЗЬ ОДИН К ОДНОМУ:   hasOne()
// Например, у команды может быть один тренер. 
// С другой стороны, один тренер может принадлежать только одной команде.
const Sequelize = require("sequelize");

const sequelize = new Sequelize('game', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
      }
});

const Coach = sequelize.define('coach', {
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

const Team = sequelize.define("team", {
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

Coach.hasOne(Team, { onDelete: "cascade"});

sequelize.sync({force:true}).then(()=>{
    console.log("Tables have been created");
}).catch(err=>console.log(err));


// В итоге при выполнении данного кода в SQLite будут созданы следующие таблицы:
// CREATE TABLE IF NOT EXISTS `coach` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
//     `name` VARCHAR(255) NOT NULL, 
// );
// CREATE TABLE IF NOT EXISTS `team` (
//     `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
//     `name` VARCHAR(255) NOT NULL,  
//     `coachId` INTEGER REFERENCES `coach` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
// );

// coachId - это связь между таблицей coach и team


//// Добавление и получения связанных данных
// setНАЗВАНИЕ_МОДЕЛИ() предназначен для установки связанных данных
// добавляем тренера
Coach.create({name: 'Any'})
     .then(coach => {
        // добавляем команду
        Team.create({name: 'AnyTeam'})
            .then(team => {
                // устанавливаем для тренера команду
                // По факту метод setМОДЕЛЬ() будет вызывать SQL-команду UPDATE. 
                // То есть к моменту вызова данного метода связываемые сущности уже должны быть в базе данных.
                coach.setTeam(team).catch(err => console.log(err));
            });
}).catch(err => console.log(err));




// получаем пользователя с id=1
Coach.findByPk(1).then(coach=>{
  if(!coach) return console.log("coach not found");
  coach.getTeam().then(team=>{
      console.log(coach.name, "-", team.name);
  });
});

// получение всех тренеров с включением связанных данных
Coach.findAll({
    attributes: ["name"], // включаем столбец name из таблицы coachs
    include: [{
      model: Team,
      attributes: ["name"]  // включаем столбец name из таблицы teams
    }]
  }).then(coachs => {
      for(coach of coachs){
        console.log(coach.name, "-", coach.team.name);
      }
})