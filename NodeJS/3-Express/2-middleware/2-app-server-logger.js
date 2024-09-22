const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Мидлварь для ЛОГГИРОАНИЯ 
app.use((req, res, next) => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const data = `${hour}:${minutes}:${seconds} Method:${req.method} URL:${req.url} USER AGENT:${req.get('user-agent')}`;
    
    console.log(data);

    fs.appendFile('2-server.log', data + '\n', (err) => {
        if(err) return console.log(err);
        console.log('Запись файла успешна!');
    });

    next();
});

app.get('/', (req, res) => res.send('Supra!'));

app.listen(PORT, () => console.log(`On PORT ${PORT}`));