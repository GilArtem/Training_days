var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.feed = function () {
        console.log('Кормим животное');
    };
    return Animal;
}());
var Transport = (function () {
    function Transport() {
        this.speed = 0;
    }
    Transport.prototype.move = function () {
        console.log('Перемещается');
    };
    return Transport;
}());
var Horse = (function () {
    function Horse() {
    }
    return Horse;
}());
function applyMixins(mixinClass, arrayClasses) {
    arrayClasses.forEach(function (arrayClasses) {
        Object.getOwnPropertyNames(arrayClasses.prototype).forEach(function (name) {
            mixinClass.prototype[name] = arrayClasses.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Transport]);
var jo = new Horse();
jo.feed();
jo.move();
