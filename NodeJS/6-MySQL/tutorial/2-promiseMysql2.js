// Мы можем использовать промисы при выполнении запросов к бд.
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "123456"
}).promise();
 
// получение объектов
// Для команды SELECT результат запроса фактически представляет массив из двух объектов, 
// где первый объект - полученные из БД данные в виде массива, 
// а второй - метаданные полей данных. 
// То есть мы могли бы получить непосредственно сами данные так:
connection.query("SELECT * FROM users")
          .then(result =>{
            console.log(result[0]);
          })
          .catch(err =>{
            console.log(err);
          });

// Либо так:
connection.query("SELECT * FROM users")
          .then(([rows, fields]) =>{
            console.log(rows);
          })
          .catch(err =>{
            console.log(err);
          });


          
// Если выполняется SQL-команда INSERT, UPDATE или DELETE, то результатом запроса будет объект, свойства которого описывают результат операции:

const user = ["Stan", 19];
const sql = "INSERT INTO users (name, age) VALUES (?, ?)";

connection.query(sql, user)
          .then(result =>{
            console.log(result[0]);
          })
          .catch(err =>{
            console.log(err);
          });

          