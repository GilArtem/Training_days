// redirect([status,] path)
// status - дополнительный параметр задает статусный код переадресации. 
// Если этот параметр не задан, тогда по умолчанию отправляется статусный код 302 (временная переадресация)
// path - путь, на который будет перенаправляться пользователь.

const express = require('express');
const app = express();

app.use('/index', (req, res) => {
    res.redirect('https://metanit.com');
});

app.use('/home', (req, res) => {
    res.redirect('about');
});

app.use('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

// ВАЖНО
// теперь это будет не http://localhost:3000/about, а http://localhost:3000/home/about.
app.use('/home/bar', (req, res) => {
    res.redirect('about');
});

app.use('/home/about', (req, res) => {
    res.send('<h1>About</h1>');
});

// Переадресация относительно текущего адреса на адрес на том же уровне:
app.use("/home/foo/bar",function (_, response) {
    response.redirect("./about");
});

// Переадресация на адрес, который располагается уровнем выше:
app.use("/home/foo/barz",function (_, response) {
    response.redirect("../about");
});
// или так 
app.use("/home/foo/bar",function (_, response) {
    response.redirect(".");
});

// А вот переадресация на 2 уровня выше
app.use("/home/foo/bar",function (_, response) {
    response.redirect("..");
});

// Мы можем указать статусный код 301, чтобы сделать переадресацию постоянной:
app.use("/three/zero/zero",function (_, response) {
    response.redirect(301, "/three/zero/one");
});

app.listen(3000);