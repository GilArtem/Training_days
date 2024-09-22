var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratorOfMethod(target, propertyName, descriptor) {
    console.log("Method is deprecated");
}
function readable(target, propertyKey, descriptor) {
    descriptor.writable = false;
}
var User2 = (function () {
    function User2(name) {
        this.name = name;
    }
    User2.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        readable
    ], User2.prototype, "print", null);
    return User2;
}());
var tom = new User2('print not has been changed');
tom.print = function () { console.log('print has been changed'); };
tom.print();
