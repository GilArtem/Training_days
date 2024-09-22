const request = require('supertest');
const assert = require('assert');
const app = require('./app').app;

describe('Експресс тесты', () => {

    it('Должен вернуть Hello Test', (done) => {
        request(app)
            .get('/')
            .expect('Hello Test')
            .end(done);
    });

    it('Должен вернуть "Не найден" и статус 404', (done) => {
        request(app)
            .get('/error')
            .expect(404)
            .expect('Не найден')
            .end(done);
    });

    it('Должен вернуть юзера с именем Том и возратсом 22', (done) => {
        request(app)
            .get('/user')
            .expect((res) => {
                assert.deepStrictEqual(res.body, { name: 'Tom', age: 22 });
            }) 
            .end(done);
    });

});
