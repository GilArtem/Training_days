// Этот стрим является Duplex стримом. 
// Он нужен для преобразования порции данных и отправки дальше по цепочке. 
// Его можно реализовать таким же способом, как и остальные стримы.


const { Transform, Readable, Writable } = require('stream');

class myTransform extends Transform {
    
    // приватный метод, который вызывается внутренними методами класса Transform для преобразования порции данных.
    _transform(chunk, encoding, callback) {}

};

// Внутри этого метода мы можем вызвать transform.push() ноль или несколько раз, который фиксирует изменения. 
// Когда мы завершим преобразование данных, мы должны вызвать callback, который отправит все, что мы добавляли в transform.push(). 
// Первый параметр этой callback функции — это ошибка. Также мы можем не использовать transform.push(), 
// а отправить измененные данные вторым параметром в функцию callback (пример: callback(null, data)). 
// Для того, чтобы понять как использовать этот вид стрима, давайте разберем метод stream.pipe.

// stream.pipe — этот метод используется для соединения Readable стрима с Writable стримом, 
// а также для создания цепочек стримов. 
// Это значит, что мы можем считывать часть данных и передавать в следующий стрим для обработки, а потом в следующий и т д.



//// Напишем Transform стрим, который будет добавлять символ * в начало и конец каждой части данных.

class CounterReader extends Readable {
    constructor(opt) {
        super(opt);
    
        this._max = 13;
        this._index = 0;
      }
    
    _read() {
        this._index += 1;
    
        if (this._index > this._max) {
          this.push(null);
        } else {
          const buf = Buffer.from(`${this._index}`, 'utf8');
    
          this.push(buf);
        }
    }
};


class CounterWriter extends Writable {
    _write(chunk, encoding, callback) {
        console.log(chunk.toString());
    
        callback();
    }
};


class CounterTransform extends Transform {
    _transform(chunk, encoding, callback){
        try {
            const resultStr = `*${chunk.toString('utf-8')}*`;

            callback(null, resultStr);
        } catch (err) {
            callback(err);
        }
    }
};


const counterReader = new CounterReader({ highWaterMark: 2 });
const counterWriter = new CounterWriter({ highWaterMark: 2 });
const counterTransform = new CounterTransform({ highWaterMark: 2 });

counterReader.pipe(counterTransform).pipe(counterWriter);

// ВЫВОД:
/*

*1*
*2*
*3*
*4*
*5*
*6*
*7*
*8*
*9*
*10*
*11*
*12*
*13*

*/


