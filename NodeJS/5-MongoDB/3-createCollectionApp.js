const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run(){
    try{
        console.log('Подключение с сервером успешно установлено');
        await client.connect();
        const db = client.db('usersdb');
        const collection = db.collection('users');
        const count = await collection.countDocuments();
        console.log(` В коллекции users ${count} документов`);
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
        console.log('Подключение закрыто');
    }
};

run().catch(console.error);
