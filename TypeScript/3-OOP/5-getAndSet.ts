//// МЕТОДЫ ДОСТУПА 

// Пример, обеспечивающий некоторую валидацию данных:

class Yamy {
    name: string;
    private _age: number;
    private _name: string;

    public get age(): number{
        return this._age;
    }

    public set age(n: number) {
        if(n < 0 || n > 110) console.log('Недопустимо!');
        else this._age = n;
    }
}

let yula = new Yamy();

yula.name = 'YOY';
yula.age = 33;
console.log(yula.age); // 33
yula.age = -11;        // Недопустимо!
console.log(yula.age); // 33
