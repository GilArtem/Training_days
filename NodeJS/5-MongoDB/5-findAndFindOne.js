const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const db = client.db('usersdb');
        const collection = db.collection('users');
        
        //1. Метод find возвращает специальный объект FindCursor, 
        // и чтобы получить все данные у этого объекта вызывается метод toArray().
        // const results = await collection.find().toArray();

        //2. Фильтрация извлекаемых документов
        // const results = await collection.find({ name: "Liza" }).toArray();

        //3. Фильтрация извлекаемых документов по нескольким критериям
        const results = await collection.find({ name: "Liza", age: 25 }).toArray();
        console.log(results);
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
};

run().catch(console.error);