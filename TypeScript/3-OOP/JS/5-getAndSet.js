var Yamy = (function () {
    function Yamy() {
    }
    Object.defineProperty(Yamy.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            if (n < 0 || n > 110)
                console.log('Недопустимо!');
            else
                this._age = n;
        },
        enumerable: false,
        configurable: true
    });
    return Yamy;
}());
var yula = new Yamy();
yula.name = 'YOY';
yula.age = 33;
console.log(yula.age);
yula.age = -11;
console.log(yula.age);
