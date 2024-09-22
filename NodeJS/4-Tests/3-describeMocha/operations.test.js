const assert = require('assert');
const operations = require('./operations');

// Объединяем тесты по типу
describe('Операционные тесты', () => {
    
    it('Для умножения надо передать 2 числа', () => {
        const expected = 12;
        const result = operations.multiply(2, 6);
        assert.strictEqual(result, expected);
    });

    it('Для сложения передаем 2 числа', () => {
        const expected = 13;
        const result = operations.add(10, 3);
        assert.strictEqual(result, expected);
    });

});