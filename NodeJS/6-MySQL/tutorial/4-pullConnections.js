// // Драйвер mysql2 позволяет создавать пулы подключений. 
// // Они позволяют уменьшить время, затраченное на подключение к серверу MySQL, благодаря повторному использованию подключений.
// const mysql = require("mysql2");
 
// // Создадим пул из 5 подключений 
// const pool = mysql.createPool({
//     connectionLimit: 5,                    // максимальное кол-во подключений
//     host: "localhost",
//     user: "root",
//     password: "123456", 
//     database: "usersdb"
// });


// const sql = "INSERT INTO users (name, age) VALUES(?, ?) ";
// const data = ["Bill", 25];

// // ВНИМАНИЕ! Поскольку оба вызова метода query выполняются асинхронно.
// // то соответственно нет никакой гарантии, что вначале произойдет добавление, а потом получение объектов.
// // добавление объекта
// pool.query(sql, data, function(err, results) {
//   if(err) console.log(err);
//   console.log(results);
// });

// // получение объектов
// pool.query("SELECT * FROM users", function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

// // ВНИМАНИЕ! В данном случае вполне может сложиться ситуация, что первым отработает метод pool.end() - до того, 
// // как ранее вызванный метод pool.query() отправит запрос к базе данных. В итоге при таком сценарии мы получим ошибку.
// // закрытие всех подключений 
// pool.end(function(err) {
//     if (err) return console.log(err.message);
//     else console.log('пул закрыт');
// });


// ЧТОБЫ ИЗБЕЖАТЬ ПРОБЛЕМ С АСИНХРОННОЙ ОЧЕРЕДНОСТЬЮ, МОЖНО ИСПОЛЬЗОВАТЬ ПРОМИСЫ
const mysql = require("mysql2");
  
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "usersdb2",
  password: "123456"
}).promise();
 
 
pool.execute("UPDATE users SET age=age+1 WHERE name=?", ["Stan"]) // изменение объектов
    .then(result =>{ 
      console.log(result[0]);
      return pool.execute("SELECT * FROM users"); // получение объектов
    })
    .then(result =>{
      console.log(result[0]);
      pool.end();
    })
    .then(()=>{
      console.log("пул закрыт");
    })
    .catch(function(err) {
      console.log(err.message);
    });