var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorator(target, propertyName, descriptor) {
}
function validator(target, propertyKey, descriptor) {
    var oldSet = descriptor.set;
    descriptor.set = function (value) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
        if (oldSet !== undefined)
            oldSet.call(this, value);
    };
}
var User7 = (function () {
    function User7(name) {
        this.name = name;
    }
    Object.defineProperty(User7.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        validator
    ], User7.prototype, "name", null);
    return User7;
}());
var art = new User7("art");
console.log(art.name);
art.name = "admin";
console.log(art.name);
