const { Writable } = require('stream');


class myWritable extends Writable {
    constructor(opt) {
        super(opt);
    }

    // _write - приватный метод, который вызывается внутренними методами класса Writable для записи порции данных. 
    // chunk - часть данных
    // encoding - кодировка, если chunk это строка
    // callback - функция, вызываемая после успешной или неудачной записи
    _write(chunk, encoding, callback) {}
}

// highWaterMark — это максимальное количество байтов внутреннего буфера стрима (по умолчанию 16кб), 
// по достижению которого stream.write начнет возвращать false.

class Counter extends Writable {
    _write(chunk, encoding, callback) {
        console.log(chunk.toString());

        callback();
    }
};

// Создание стрима:
const counter = new Counter({ highWaterMark: 2 });

for (let i = 1; i < 13; i += 1) {
    counter.write(Buffer.from(`${i}`, 'utf-8'));
}

// Когда счетчик дойдет до десяти, то буфер будет заполняться при каждом вызове write, 
// соответственно, если бы запись осуществлялась в медленный источник, то все остальные данные 
// при вызове write сохранялись бы в оперативную память, что могло бы вызвать ее переполнение.

// Когда возникает такая ситуация, нам надо подождать, пока стрим запишет текущую порцию данных, 
// освободит внутренний буфер (вызовет событие drain), и затем мы можем возобновить запись данных. 

class CounterWithOnce extends Writable {
    _write(chunk, encoding, callback) {
        console.log(chunk.toString());

        callback();
    }
};

const counterWithOnce = new CounterWithOnce({ highWaterMark: 2 });

(async () => {
    for (let i = 1; i < 13; i += 1) {
        
        const canWrite = counter.write(Buffer.from(`${i}`, 'utf-8'));

        // возможна ли запись данных в стрим?
        console.log(`Can we write bounch of data? ${canWrite}`);

        // если нет, то ожидаем, пока буфер освободится, и продолжаем запись.
        if(!canWrite) {
            // .once() позволяет создать промис и подождать, пока определенное событие выполнится один раз. 
            await events.once(counter, 'drain');
            console.log('drain event fired.');
        }

    }
})();

// Вывод:
/*
1
Can we write bounch of data? true
2
Can we write bounch of data? true
3
Can we write bounch of data? true
4
Can we write bounch of data? true
5
Can we write bounch of data? true
6
Can we write bounch of data? true
7
Can we write bounch of data? true
8
Can we write bounch of data? true
9
Can we write bounch of data? true
10
Can we write bounch of data? true
11
Can we write bounch of data? true
12
Can we write bounch of data? true
*/

// При работе с большими объемами данных, например файлами, которые весят больше 10гб, забыв сделать это, вы можете столкнуться с утечкой памяти.