const operations = require('./operations');
const assert = require('assert');

it('Должно быть перемножено 2 числа!!', function(){
    const expectedResult = 15;
    const result = operations.multyply(3, 5);
    if(result !== expectedResult){
        throw new Error(`Ожидаемый результат: ${expectedResult}, а на выходе имеем: ${result}`);
    }
});

it('Для сложения требуется 2 числа!!', function(){
    const expectedResult = 8;
    const result = operations.add(4, 4);
    if(result !== expectedResult){
        throw new Error(`Ожидаемый результат: ${expectedResult}, а на выходе имеем: ${result}`)
    }
});

it('Асинхронно должно быть перемножено 2 числа!!', function(done){
    const expectedResult = 30;
    operations.multyplyAsync(3, 10, function(result){
        if(result !== expectedResult){
            throw new Error(`Ожидаемый результат: ${expectedResult}, а на выходе имеем: ${result}`);
        }
        // Особенностью тестирования асинхронных функций является то, что для того, чтобы они завершились до завершения теста, 
        // в тестирующую функцию передается функция done()
        // ЕСЛИ НЕ СДЕЛАТЬ ЭТОГО, ТО ТЕСТ ЗАВЕРШИТЬСЯ РАНЬШЕ, ЧЕМ ФУНКЦИЯ ВЫПОЛНЕТСЯ!
        done();
    });
});

// Также для проверки можно использовать встроенный модуль Assert, с функцией assert.strictEqual()
it('Для вычетания, нужно 2 числа', function(){
    const expected = 3;
    const result = operations.subtraction(10, 7)
    assert.strictEqual(result, expected);
});