// класс MongoClient. Через него будет идти все взаимодействия с хранилищем данных.
const MongoClient = require('mongodb').MongoClient;

//  определим подключение к локальному серверу MongoDB
const url = "mongodb://127.0.0.1:27017/";

// создаем объект MongoClient и передаем ему строку подключения
const client = new MongoClient(url);

// ИСПОЛНЕНИЕ ПОДКЛЮЧЕНИЯ ЧЕРЕЗ THEN() (НЕ ОЧЕНЬ УДОБНО)
// Для подключения к серверу mongodb применяется метод connect():
// client
//     .connect()
//     .then(mongoClient => {
//         console.log('Подключение установлено');
//         console.log(mongoClient.options.dbName); // Получаем имя бд
//         // какие-нибудь операции с базой данных MongoDB
//         // закрываем подключение
//         mongoClient
//             .close()
//             .then(() => console.log('Подключение закрыто'));
//     });


// ИСПОЛНЕНИЕ ПОДКЛЮЧЕНИЯ ЧЕРЕЗ async/await:
async function run(){
    try{
        // Подключение к серверу 
        await client.connect();
        console.log('Подключение установлено');
        // взаимодействие с бд

    } catch (err) {
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или ошибки 
        await client.close();
        console.log('Подключение закрыто')
    }
};

run().catch(console.error);