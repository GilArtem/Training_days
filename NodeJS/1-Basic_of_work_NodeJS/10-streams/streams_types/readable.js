const { Readable } = require('stream');

class MyReadable extends Readable {
    // принимаем набор параметорв от родителя
    constructor(opt) {
        super(opt);
    }

    // Это реализация приватного метода, который вызывается внутренними методами класса Readable. 
    //Он вызывается постоянно пока размер данных не достигнет highWaterMark.
    _read(size){}
};

//highWaterMark — это максимальное количество байтов внутреннего буфера стрима (по умолчанию 16кб) 
// по достижению которого считывание из ресурса приостанавливается. Для того, чтобы продолжить считывание, 
// нам нужно освободить внутренний буфер. Мы можем это сделать вызвав методы pipe, resume или подписавшись на событие data.

// readable.push - непосредственно и добавляет данные во внутренний буфер. 
// Он возвращает true, но как только буфер будет заполнен, 
// то вызов этого метода начнет возвращать false. Он может управляться методом readable._read.


class Counter extends Readable {
    constructor(opt) {
        super(opt);

        this._max = 10;
        this._index = 0;
    }

    _read() {
        this._index += 1;

        if(this._index > this._max) {
            this.push(null);
        } else {
            // Создает новый Буфер, используя массив байтов в диапазоне 0 - 255. 
            // Записи массива за пределами этого диапазона будут усечены, чтобы поместиться в него.
            const buf = Buffer.from(`${this._index}`, 'utf-8');

            console.log(`Added: ${this._index}. Could be added?`, this.push(buf));
        }
    }
}

// Размер нашего внутреннего буфера будет равняться 2-м байтам, т.е. может хранить 2 символа (1 символ = 1 байт)
const counter = new Counter({ highWaterMark: 2 });

// Данный read - это не приватный метод _read, а это метод, возвращающий данные из внутреннего буфера
// console.log(`Receiced ${counter.read().toString()}`);

//// !!! ВЫВОД без чистки буфера !!! ////
/*
Added: 1. Could be added? true
Receiced 1
Added: 2. Could be added? true
Added: 3. Could be added? false
*/

// После вызова counter.read() стрим начинает считывание, записывает '1' во внутренний буфер и возвращает его. 
// Затем он продолжает считывание, записывает '2'. Когда он запишет '3', то буфер будет заполнен, readable.push вернет false, 
// и стрим будет ждать, пока внутренний буфер освободится. Т.к. в нашем примере нет логики на освобождения буфера, скрипт завершится.


// ЧИСТКА БУФЕРА
// Для того, чтобы чтение не прирывалось
const counterWithBufCleaner = new Counter({ highWaterMark: 2 });

counterWithBufCleaner.on('data', chunk => {
    console.log(`Received: ${chunk.toString()}`);
});

//// !!! ВЫВОД с очисткой буфера !!! ////
/*
Added: 1. Could be added? true
Added: 2. Could be added? false
Received: 1
Added: 3. Could be added? false
Received: 2
Added: 4. Could be added? false
Received: 3
Added: 5. Could be added? false
Received: 4
Added: 6. Could be added? false
Received: 5
Added: 7. Could be added? false
Received: 6
Added: 8. Could be added? false
Received: 7
Added: 9. Could be added? false
Received: 8
Added: 10. Could be added? false
Received: 9
Received: 10 
*/