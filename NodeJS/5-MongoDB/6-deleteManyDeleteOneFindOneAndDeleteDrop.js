const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const db = client.db('usersdb');
        const collection = db.collection('users');
        
        //1. Удалить один элемент 
        // const result = await collection.deleteOne({ name: 'Nobody' });

        //2. Удалить несколько элементов
        // const result = await collection.deleteMany({ name: 'Nobody' });
        
        //3. Удаляет один документ по определенному критерию, 
        // но по сравнению с методом deleteOne() он позволяет получить удаленный документ:
        // const result = await collection.findOneAndDelete({ age: 100 });

        //4. Удаляет всю коллекцию:
        // result будет равен true/false
        // const result = await.collection.drop();

        console.log(result);
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
};

run().catch(console.error);