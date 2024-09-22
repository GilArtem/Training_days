// по самой маршрутизации все ясно
// Посмотри, как используются регулярные выражения 

const express = require('express');
const app = express();

// соответствует сроке запроса 'bk' или 'bok'
app.get('/bo?k', (req, res) => res.send(req.url));

// соответствует сроке запроса 'bok' или 'book' или 'boook' и т.д.
app.get('/bo+k', (req, res) => res.send(req.url));

// соответствует запросам "/bork", "/bonk", "/bor.dak", "/bor/ok" и так далее.
app.get('/bo*k', (req, res) => res.send(req.url));

//  позволяют оформить группу символов, которые могут встречаться в запросе
app.get(/.*(\.)html$/, (req, res) => res.send(req.url));
// или
app.get('/book(.html)?', (req, res) => res.send(req.url));

app.listen(3000);