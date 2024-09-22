var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyPropertyDecorator(target, propertyKey) {
}
function format() {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return "Mr./Ms." + value;
        };
        var setter = function (newVal) {
            if (newVal.length > 2) {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
var User6 = (function () {
    function User6(name) {
        this.name = name;
    }
    User6.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        format()
    ], User6.prototype, "name", void 0);
    return User6;
}());
var ron = new User6("Tom");
ron.print();
ron.name = "Tommy";
ron.print();
ron.name = "To";
ron.print();
