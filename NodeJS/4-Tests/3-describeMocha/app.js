const express = require("express");
const app = express();
 

app.get("/", function (req, res){
     
    res.send("Hello Test");
});
 
app.get("/error", function (req, res){
     
    res.status(404).send("Не найден");
});
 
app.get("/user", function (req, res){
     
    res.send({name:"Tom", age: 22});
});
 

module.exports.app = app;