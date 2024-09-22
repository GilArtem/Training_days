// Также можно передавать более сложые объекты, которые состоят из множества свойств:

const express = require('express');
const app = express();

app.use('/about', (req, res) => {
    
    console.log(req.query);
    const id = req.query.user.id;
    const name = req.query.user.name;

    res.send(`<h3>id: ${id}<br>name: ${name}</h3>`);
});

app.listen(3000);

// Запрос: localhost:3000/about?user[id]=13&user[name]=Aretm