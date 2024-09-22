//// 1. ДО ПОЯВЛЕНИЯ VIEWS И MODELS
// exports.addUser = (req, res) => res.send('Добавление пользователя');
// exports.getUsers = (req, res) => res.send('Список пользователей');


//// 2. ПОСЛЕ ПОЯВЛЕНИЯ VIEWS И MODELS
// const User = require('../models/user.js');

// exports.addUser = (req, res) => res.render('create.hbs');
// exports.getUsers = (req, res) => res.render('users.hbs', { users: User.getAll() });
// exports.postUser = (req, res) => {
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = new User(userName, userAge);
//     user.save();
//     res.redirect('/users');
// };


//// 3. ПОСЛЕ ПОДКЛЮЧЕНИЯ MONGOOSE
const User = require('../models/user.js');


exports.addUser = (req, res) => res.render('create.hbs');

exports.getUsers = async (req, res) => {
    // получает данные из базы данных и передает их в представление users.hbs.
    const allUsers = await User.find({});
    res.render('users.hbs', { users: allUsers });
};

exports.postUser = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User(userName, userAge);
    // сохраняет объект в бд
    await user.save();
    res.redirect('/users');
};