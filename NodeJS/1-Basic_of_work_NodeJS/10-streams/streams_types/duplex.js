// Он объединяет в себе Readable и Writable стримы
// мы должны написать реализацию двух методов _read и _write.

const { Duplex } = require('stream');
const events = require('events');

class myDuplex extends Duplex {
    constructor(opt) {
        super(opt);
    }

    _read(size){}

    _write(chunk, encoding, callback){}
};

// Здесь нам интересны 2 параметра, которые мы можем передать в конструктор, это: 
// readableHighWaterMark и writableHighWaterMark, 
// которые позволяют нам указать размер внутреннего буфера для Readable, Writable стримов

class CounterDuplex extends Duplex {
    constructor(opt){
        super(opt);

        this._max = 24;
        this._index = 0;
    }

    _read() {
        this._index += 1;

        if(this._index > this._max) {
            this.push(null);
        } else {
            const buf = Buffer.from(`${this._index}`, 'utf-8');

            this.push(buf);
        }
    }

    _write(chunk, encoding, callback) {
        console.log(chunk.toString());

        callback();
    }
};

const counterDuplex = new CounterDuplex({
    readbleHighWaterMark: 2,
    writableHighWaterMark: 2
});

(async() => {
    let chunk = counterDuplex.read();

    while(chunk !== null) {
        const canWrite = counterDuplex.write(chunk);

        console.log(`Can we write bunch of data? ${canWrite}`);

        if(!canWrite) {
            await events.once(counter, 'drain');
            console.log('drain event fired.');
        }

        chunk = counter.read();
    }
})();
