const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run() {
    try {
        // Подключение к серверу 
        await client.connect();
        // обращаемся к встроенной в mongoDB бд - admin
        const db = client.db("admin");
        // выполняем пинг для проверки подключения 
        const result = await db.command({ ping: 1 });
        console.log('Подключение с сервером успешно установлено');
        console.log(result);
    } catch(err){
        console.log('Возникла ошибка');
        console.log(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке 
        await client.close();
        console.log('Подключение закрыто');
    }
};

run().catch(console.error);