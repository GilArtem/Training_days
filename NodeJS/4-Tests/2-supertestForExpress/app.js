const express = require("express");
const app = express();
 
app.get("/", function (request, response){
     
    response.send("Hello Test");
});
 
app.get('/error', function(request, response){
    response.status(404).send('Не найден');
});

app.get('/user', function(request, response){
    response.send({ name: 'Tom', age: 24 });
});


module.exports.app = app;