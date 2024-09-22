const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);
 
async function run() {
    const newUsers = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
    try{
        await client.connect();
        const db = client.db('usersdb');
        const collection = db.collection('users');
        await collection.insertMany(newUsers);
        
        //1. Обновить один элемент и вывести его 
        // returnDocument: "after" указывает, что надо получить новое состояние документа.
        // По умолчанию этот параметр имеет значение before (то есть возвращает состояние документа ДО обновления)
        // const result = await collection.findOneAndUpdate({ age: 21 }, { $set: { age:25 }}, { returnDocument: "after" } );
        
        //2. обновить все документы из коллекции, которые соответствуют критерию фильтрации:
        // const result = await collection.updateMany({ name: "Sam" }, { $set: { name: "Bob" } });
        
        //3. Обновить документ, но не выводить его
        const result = await collection.updateOne({ name: 'Tom' }, { $set: { name: 'Thomas', age: 33 } });

        console.log(result);
    } catch(err) {
        console.log(err);
    } finally {
        await client.close();
    }
};

run().catch(console.error);