const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

const users = [{ name: 'Liza', age: 25 }, { name: 'Nobody', age: 100 }, { name: 'KirA', age: 30 }];

async function run() {
    try {
        console.log('Подключение успешно');
        await client.connect();
        const db = client.db('usersdb');
        const collection = db.collection('users');
        const user = { name: 'Artem', age: 27 };
        const result = await collection.insertOne(user);
        const results = await collection.insertMany(users);
        console.log(result);
        console.log('++_+_+_+_+_+_+_+_+_+_++_++');
        console.log(results);
        console.log(user);
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
};

run().catch(console.error);

