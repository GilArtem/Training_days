const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;
const url = 'mongodb://127.0.0.1:27017/';
const app = express();

app.use(express.static('public')); // статические файлы будут в папке public
app.use(express.json());  // автоматический парсинг json

const client = new MongoClient(url);

(async() => {
    try{
        await client.connect();
        app.locals.collection = client.db('usersdb').collection('users');
        app.listen(3000);
        console.log('Сервер ожидает подключения ...');
    } catch(err) {
        return console.log(err);
    } 
})();


app.get('/api/users', async(req, res) => {
    const collection = req.app.locals.collection;
    try{
        const users = await collection.find({}).toArray();
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.get('/api/users/:id', async(req, res) => {
    const collection = req.app.locals.collection;
    try {
        const id = new objectId(req.params.id);
        const user = await collection.findOne({_id: id});
        if(user) res.send(user);
        else res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.post('/api/users', async(req, res) => {
    
    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {name: userName, age: userAge};
    const collection = req.app.locals.collection;

    try {
        await collection.insertOne(user);
        res.send(user);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.delete('/api/users/:id', async(req, res) => {
    const collection = req.app.locals.collection;

    try {
        const id = new objectId(req.params.id);
        const user = await collection.findOneAndDelete({_id: id});
        if(user) res.send(user);
        else res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.put('/api/users', async(req, res) => {
    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const collection = req.app.locals.collection;

    try {
        const id = new objectId(req.body.id);
        const user = await collection.findOneAndUpdate({_id: id}, {$set: {age: userAge, name: userName}}, {returnDocument: "after"});
        
        if(user) res.send(user);
        else res.sendStatus(404);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// прослушиваем прерывание работы программы (ctrl-c) в консоли
process.on('SIGINT', async() => {
    await client.close();
    console.log('Приложение завершило работу');
    process.exit();
});

