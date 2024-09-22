const request = require('supertest');
const {app} = require('./app');
const assert = require('assert');

it('Должен вернуть Hello Test', function(done){
    // Для настройки и выполнения теста в request передается функционал приложения:
    request(app)
        // устанавливаем маршрут, по которому будем обращаться в приложении:
        .get('/')
        // Устанавливаем ожидаемый результат через метод expect:
        .expect('Hello Test')
        // с помощью метода end() выполняем тест
        .end(done);
});

it('Должен вернуть "Не найден" со статусом 404', function(done){
    request(app)
        .get('/error')
        .expect(404)
        .expect('Не найден')
        .end(done);
});

it('Должен вернуть пользователя с именем Том, возрастом 24', (done) => {
    request(app)
        .get('/user')
        .expect((response) => {
            //  Для сравнения комплексных объектов можно применить метод deepEqual() или deepStrictEqual() библиотеки assert
            assert.deepStrictEqual(response.body, { name: 'Tom', age: 24 });
        })
        .end(done);
});